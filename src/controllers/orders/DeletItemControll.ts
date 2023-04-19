import { Request, Response } from "express";
import { DeletItemService } from "../../services/orders/DeletItemService";

export class DeletItemControll{
    async handle(req: Request, res: Response){
        const item_id = req.query.item_id as string;
        const service = await new DeletItemService().execute({item_id})
        return res.json(service)
    }
}