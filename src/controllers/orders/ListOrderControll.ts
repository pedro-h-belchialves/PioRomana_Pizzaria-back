import { Request, Response } from "express";
import { ListOrderService } from "../../services/orders/ListOrderService";

export class ListOrderControll{
    async handle(req: Request, res: Response){
        const service = await new ListOrderService().execute();
        return res.json(service)
    }
}