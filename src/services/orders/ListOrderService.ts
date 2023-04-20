import prismaclient from "../../prisma";

export class ListOrderService{
    async execute(){
        const order = await prismaclient.order.findMany({
            where:{
                draft: false,
                status: false
            },
            orderBy:{
                ceated_at: 'asc'
            }
        })
        return order;
    }
}