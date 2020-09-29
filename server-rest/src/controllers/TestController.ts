import PromiseRouter from 'express-promise-router'
import {Request,Response} from "express";
import {ORM} from "../server";
import {Post} from "../entities/Post";

const router = PromiseRouter()


router.get('/', async (_req: Request,res: Response) => {
  const post = await ORM.em.find(Post,{})
  res.json(post)
})

export const TestConroller = router
