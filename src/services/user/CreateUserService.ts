import prismaclient from "../../prisma";
import { hash } from "bcryptjs";



interface UserRequest{
    name: string;
    email: string;
    password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        
        // verificar se foi enviado um email
        if(!email){
            throw new Error('Email incorrect')
        }

        //Verificar se o email já foi cadastrado //   >> Search the first item it faunds
       const already = await prismaclient.users.findFirst({
        where:{ email: email}
       })

       if(already){
        throw new Error('This user already exists')
       }

       const passwordHash = await hash(password, 8);

       //cadastrar um usuário
       const user = await prismaclient.users.create({
        data:{
            name: name,
            email: email,
            password: passwordHash,
        },
        select:{ // Filter what will be shoun and hiddin the rest
            id: true,
            name: true,
            email: true
        }
       })



        return user 

    }
}

export {CreateUserService}