import { Request, Response } from "express";
import { CreateOrderSetvice } from "../../services/orders/CreateOrderSetvice";
import prismaclient from "../../prisma";

export class CreateOrderControll{
    async handle(req: Request, res: Response){
        const {table, name} = req.body

        const tableAlready = await prismaclient.order.findFirst({
            where: {table: table}
        })
        if(tableAlready){
            throw new Error("This table does already have an order")
        }


        const service = await new CreateOrderSetvice().execute({table, name})

        return res.json(service)
    }
}