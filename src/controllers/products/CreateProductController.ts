import { Request, Response } from "express";
import { CreateProductSevice } from "../../services/products/CreateProductSevice";

export class CreateProductController{
    async handle(req: Request, res : Response){

        const {name, price, description, category_id} = req.body

        const createProduct =  new CreateProductSevice()


        if(!req.file || !name || !price){
            throw new Error('Compleat the information: Banner; Name; Price')
        }else{
            const { filename: banner } =req.file
            const service = await createProduct.execute({name, price, description, banner, category_id})
            return res.json(service);
        }
        
       
    
    }
}  