import { IAppController } from "./iapp.controller";
import axios from "axios";
export default class AppController implements IAppController {
    public async getAllData(): Promise<any>  {
     return axios({
            method: "get",
            url: "http://swapi.py4e.com/api/people/",
            headers: {

            }, 
        })
        .then(response => {
            return Promise.resolve({...response});
        })
        .catch(error => {
            throw error;
        });

    }
}

