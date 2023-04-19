import { Request, Response } from "express";
import { CreateItemService } from "../../services/orders/CreateItemService";

export class CreateItemControll{
    async handle(req: Request, res: Response){

        const {order_id, product_id, amount} = req.body;

        const service = await new CreateItemService().execute({order_id, product_id, amount})

        return res.json(service)
    }
}