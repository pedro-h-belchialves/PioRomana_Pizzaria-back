import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";

export class ListByCategoryControll{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string;

        const service = await new ListByCategoryService ().execute({category_id});
        return res.json(service);
    }
}