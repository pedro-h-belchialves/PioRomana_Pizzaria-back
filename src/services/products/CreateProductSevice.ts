import prismaclient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

export class CreateProductSevice{
    async execute({name, price, description, banner, category_id} : ProductRequest){
        const product = await prismaclient.product.create({
           data:{
            name : name,
            price: price,
            description: description,
            banner: banner,
            category_id: category_id
           }
        })

            return product
    }
} 