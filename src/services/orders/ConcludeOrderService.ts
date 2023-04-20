import prismaclient from "../../prisma";

export class ConcludeOrderService{
    async execute(order_id: string){
        const finish = await prismaclient.order.update({
            where:{id: order_id},
            data:{status: true},
        })
        return finish;
    }
}