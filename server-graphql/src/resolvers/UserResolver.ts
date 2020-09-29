import {Arg, Ctx, Mutation} from "type-graphql";
import {MyContext} from "../config/types";
import {User} from "../entities/User";
import {UsernamePasswordInput} from "../utils/usernamePasswordInput";


export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("options") options:UsernamePasswordInput,
    @Ctx() {em}:MyContext
  ){
    const user = await em.create(User,{
      username:options.username,
      password:options.password}
      )
    return {user}
  }
}
