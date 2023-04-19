import prismaclient from "../../prisma";

interface ItemReq{
    item_id: string
}

export class DeletItemService{
    async execute({item_id}: ItemReq){
        const delet = await prismaclient.item.delete({
            where:{id: item_id}
        })
        return delet;
    }
}