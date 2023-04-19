import { ListCategoryService } from "../../services/category/ListCategortService";
import { Request, Response } from "express";

export class ListCategoryControll{
    async handle(req: Request, res : Response){
        const service = await new ListCategoryService().execute();

        return res.json(service)
    }
}