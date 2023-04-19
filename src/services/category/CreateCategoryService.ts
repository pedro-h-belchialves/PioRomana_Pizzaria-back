import prismaclient from "../../prisma"

interface categoriesRequest{
    name: string
}

export class CreateCategoryService{
    async execute({name} : categoriesRequest){

        const nameAg =  await prismaclient.category.findFirst({
            where:{name: name}
        })

        if(name === "" || nameAg){
            throw new Error('This fild already exists // name is requered')
        }

        const category = await prismaclient.category.create({
            data:{name : name},
            select:{
                id: true,
                name: true,
            }
        })
        

        return category
    }
}
