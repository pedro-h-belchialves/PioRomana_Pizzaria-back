import prismaclient from "../../prisma";
import { Request, Response } from "express";

interface OrderRequest{
    table: number;
    name: string;
}

export class CreateOrderSetvice{
    async execute({table, name}: OrderRequest){

        if(table > 43){
            throw new Error("this table do not exist")
        }

        const order = await prismaclient.order.create({
            data:{
                table: table,
                name: name
            }
        })

        return order

    }
}