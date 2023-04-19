import prismaclient from "../../prisma";


export class RemoveOrderService{
    async execute(order_id: string){

        const delet = await prismaclient.order.delete({
            where:{id: order_id}
        })
        return delet
    }
}