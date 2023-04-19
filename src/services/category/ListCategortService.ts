import prismaclient from "../../prisma";

export class ListCategoryService{
    async execute(){

        const categories = await prismaclient.category.findMany({ // FINDMANY gets all the created data and retorns this
            select:{
                id: true,
               name: true
            }
        })

        return categories
    }
}