import express from 'express'
import {PORT} from "./config/const";
import cors from 'cors'
import helmet from "helmet";
import MikroConfig from "./config/mikro-orm.config"
import {EntityManager, MikroORM, RequestContext} from "@mikro-orm/core";
import bodyParser from "body-parser";
import {Routes} from "./routes/Routes";

export const ORM = {} as {
  orm: MikroORM,
  em: EntityManager,
}
const main = async () => {
  ORM.orm = await MikroORM.init(MikroConfig)
  await ORM.orm.getMigrator().up()
  ORM.em = await ORM.orm.em
  const app = express();
  app.use(cors({origin: "http://localhost:3000", credentials: true}))
  app.use(helmet())
  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())
  app.use(bodyParser.raw())
  app.use(async (_req, _res, next) => {
    RequestContext.create(ORM.em, next)
  })
  new Routes().routes(app)
  app.listen(PORT,() => {
      console.log("Server is working on port: ",PORT);
    })
}
main().catch(e => console.log(e))
