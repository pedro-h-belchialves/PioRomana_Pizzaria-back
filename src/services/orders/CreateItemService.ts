import prismaclient from "../../prisma";

interface ItensRequest{
    order_id: string,
    product_id: string,
    amount: number
}

export class CreateItemService{
    async execute({order_id, product_id, amount}: ItensRequest){

        const item = await prismaclient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        })

        return item

    }
}