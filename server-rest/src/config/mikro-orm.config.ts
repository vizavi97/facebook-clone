import {MikroORM} from "@mikro-orm/core";
import {__prod__} from "./const";
import path from "path";
import {User} from "../entities/User";
import {Post} from "../entities/Post";
import {Sex} from "../entities/static/Sex";


export default {
  migrations: {
    path: path.join(__dirname,'../migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [User,Post,Sex],
  dbName: "facebook-clone",
  type: "postgresql",
  debug: __prod__
} as Parameters<typeof MikroORM.init>[0]
