import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserControll{
    async handle(req: Request, res: Response){

        const {user_id} = req;

        const services = await new DetailUserService().execute(user_id)

        return res.json(services)
    }
}

export {DetailUserControll}