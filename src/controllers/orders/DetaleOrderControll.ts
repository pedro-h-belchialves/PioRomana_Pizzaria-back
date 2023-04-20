import { Request, Response } from "express";
import { DetaleOrderService } from "../../services/orders/DataleOrderService";

export class DetaleOrderControll{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;
        const service = await new DetaleOrderService().execute(order_id);
        return res.json(service);
    }
}