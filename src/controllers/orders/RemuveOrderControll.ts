import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/orders/RemoveOrderService";


export class RemuveOrderControll{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;

        const service = await new RemoveOrderService().execute(order_id);
        return res.json(service)
    }
}