import { Request, Response } from "express";
import { SendOrderService } from "../../services/orders/SendOrderService";

export class SendOrderControll{
    async handle(req: Request, res: Response){
        const {order_id} = req.body;
        const services = await new SendOrderService().execute(order_id);
        return res.json(services);
    }
}