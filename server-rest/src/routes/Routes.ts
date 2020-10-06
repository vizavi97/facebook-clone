import {UserController} from "../controllers/UserController";
import PromiseRouter from "express-promise-router";
import {Express} from "express";

export class Routes {
  public userController: UserController = new UserController();
  public router = PromiseRouter()
  public routes(app:Express):void {
    app.route('/user/register').post(this.userController.register)
    app.route('/user/login').post(this.userController.login)
    app.route('/user/verify').post(this.userController.verify)
  }
}
