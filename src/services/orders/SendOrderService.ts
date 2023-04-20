import prismaclient from "../../prisma";


export class SendOrderService{
    async execute(order_id: string){
        const send = await prismaclient.order.update({
            where:{id: order_id},
            data:{draft: false}
        })
        return send;
    }
}