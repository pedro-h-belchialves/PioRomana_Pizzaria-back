import prismaclient from "../../prisma";

interface ProductRequest{
    category_id: string;
}

export class ListByCategoryService{
    async execute({category_id} : ProductRequest){

        const findByCategory = await prismaclient.product.findMany({
            where:{category_id: category_id}
        })
        return findByCategory
    }
}