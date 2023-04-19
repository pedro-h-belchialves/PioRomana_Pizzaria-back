import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

    interface PayLoad{
        sub: string;
    }

    export function isAuth(req: Request, res:Response, next: NextFunction){
    
        
        // Recive the token 
        const authToken = req.headers.authorization
        //The TOKEN comes always from the  authorization that is in the header of the req.
        if(!authToken){
            return res.status(401).end()
        }
        // separate the token:
        const [, token] = authToken.split(' ')

        try{

            //validate the token
            const { sub } = verify(  token ,  process.env.JWT_SECRET  ) as PayLoad;
            
            //Recover the id from the token and put it into a variable "user_id" of req  
            req.user_id = sub; // this script creates a new variable of req and sets its value with the current sub (id)

            return next()

        } catch(err){
            return res.status(401).end()
        }
    }