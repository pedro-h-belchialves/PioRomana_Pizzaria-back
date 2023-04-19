import prismaclient from "../../prisma";

class DetailUserService{
    async execute(user_id: string){

        const user = await prismaclient.users.findFirst({
            where:{id: user_id},
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        return user
    }
}

export {DetailUserService} 