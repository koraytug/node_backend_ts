import * as express from "express";
import AppController from "../controllers/app.controller";
import {IAppController} from "../controllers/iapp.controller";

export default class AppRouter {
    public appRouter = express.Router();
    public app: IAppController = new AppController();

    constructor() {
        this.appRouter.get("/getall_data", this.app.getAllData);
        // this.customerRouter.post("/", this.customers.create);
    }

}

