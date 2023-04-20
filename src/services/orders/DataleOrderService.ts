import prismaclient from "../../prisma";

export class DetaleOrderService{
    async execute(order_id: string){
        const show = prismaclient.item.findMany({
            where:{order_id: order_id},
            include:{
                product: true,
                orders: true
            }
        })
        return show
    }
}