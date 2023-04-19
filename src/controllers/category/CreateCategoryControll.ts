import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

export class CreateCategoryControll{
     async handle(req: Request, res: Response){
        const {name} = req.body;

        const service =  await new CreateCategoryService().execute({name});

        return res.json(service); 
     }
}{

}