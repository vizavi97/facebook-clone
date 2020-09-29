import {Entity} from "@mikro-orm/core";
import {Request, Response} from "express";
import {generateToken, registerTypes, validateRegister} from "../utils/functions";
import argon from 'argon2'
import {User} from "../entities/User";
import {ORM} from "../server";
import {Post} from "../entities/Post";

@Entity()
export class UserController {
  async register(req: Request, res: Response): Promise<any> {
    const params = req.body;
    const errors = validateRegister(params)
    if (errors) {
      res.json(errors)
    }
    const registerBy = registerTypes(params)
    const hashedPassword = await argon.hash(params.password)
    try {
      const user = await ORM.em.create(User, {
        number: registerBy == "NUMBER" ? params.emailOrPhoneNumber : null,
        email: registerBy == "EMAIL" ? params.emailOrPhoneNumber : null,
        password: hashedPassword,
        name: params.name,
        surname: params.surname,
        sex: params.sex,
        age: JSON.stringify(params.date),
      })
      await ORM.em.persistAndFlush(user)
      return  res.status(200).json({...user})
    } catch (e) {
      console.log(e)
      if (e.code === "23505") {
        return  res.send({
          errors: "That email or number is already using"
        })
      }
      else {
        return  res.status(400)
      }
    }
  }
  async login(req:Request,res:Response): Promise<any> {
    const params = req.body
    const errors = validateRegister(params)
    if (errors) {
      res.json(errors)
    }
    const registerBy = registerTypes(params)
    const user = await  ORM.em.findOne(User,registerBy == "EMAIL" ? {email: params.emailOrPhoneNumber} : {number: params.emailOrPhoneNumber})
    if (!user) {
      return res.json({errors: [
          {
            field: "username Or Email",
            message: "that username doesn't exist",
          },
        ]})
    }
    const valid = await argon.verify(user.password, params.password)
    if (!valid) {
      return res.json({errors: [
          {
            field: "password",
            message: "incorrect password",
          },
        ]})
    }
    const token = generateToken(user)
    return res.status(200).json({user: {...user},token})
  }
  async test(_req: Request, res: Response) {
    const post = await ORM.em.find(Post, {})
    return res.json(post)
  }
}
