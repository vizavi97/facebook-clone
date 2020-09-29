import {Connection, EntityManager, IDatabaseDriver} from "@mikro-orm/core";
import {NextFunction, Request, Response} from "express";


export interface MyContext {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>> & NextFunction,
  req: Request
  res: Response
}
