import {Request, Response} from "express";

export interface IAppController {
    // getAllData(req: Request, res: Response);
    getAllData(url: string): Promise<any>
}
