import express, {Express, Request, Response} from 'express'
import {PORT} from "./config/const";
import MikroConfig from "./config/mikro-orm.config"
import {MikroORM} from "@mikro-orm/core";
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {UserResolver} from "./resolvers/UserResolver";
import {MyContext} from "./config/types";


class Server{
  port:number
  app:Express

  constructor(port:number,app:Express) {
    this.port = port
    this.app = app
  }
  async main() {
    const orm = await MikroORM.init(MikroConfig)
    await orm.getMigrator().up()
    this.server().catch(r => console.log(r))
    this.listen()
    this.get()
  }
  private async server() {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver],
        validate: false
      }),
      context: ({req,res}):MyContext => <MyContext>({em: MikroORM.init(MikroConfig).em,req,res})
    })
    apolloServer.applyMiddleware({app: this.app,cors: false})
  }
  private listen() {
    this.app.listen(this.port, () => {
      console.log(`server started at http://localhost:${this.port}`);
    })
  }
  private get() {
    this.app.get('/',(_req:Request,res:Response) => {
      res.send('Server is working')
    })
  }
}

const server = new Server(PORT,express());
server.main()

