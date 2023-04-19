import prismaclient from "../../prisma";
import { compare } from "bcryptjs";
import "express-async-errors";
import { sign } from "jsonwebtoken";


interface AuthParams{
    email: string,
    password: string
}

class AuthUserService{
    async execute( {email, password} : AuthParams){
        
        //Check if the email exists :::::::::::::::::::::
        const user = await prismaclient.users.findFirst({
            where:{email: email}
        })
        if(!user){
            throw new Error(`User not found: ${email} is incorrect`)
        }

        // Check if the password matchs to the email :::::
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error("Password incorrect")
        }

        // if all ok =>
        //Generate a token "JWT" and return user's data wiht id, name and email
        // SIGN method registers and generate a TOKEN
        const token = sign(
            //the first thing to set is the PAYLOAD, that is the data will be created
            {
                name: user.name,
                email: user.email
            },
            // the second is the SECRET (usualy the secret is a hashed password setes in the doc.env [the key is the same for all])
            process.env.JWT_SECRET,
            {
            // the lest step will be passed opitional datas, the SUB is usualy filled with the Id
              subject: user.id,
              expiresIn:'30d'
            }
        )
        

        

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export {AuthUserService}