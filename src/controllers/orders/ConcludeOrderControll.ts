import { Request, Response } from "express";
import { ConcludeOrderService } from "../../services/orders/ConcludeOrderService";

export class ConcludeOrderControll{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;
        const service = await new ConcludeOrderService().execute(order_id);
        return res.json(service)
    }
}