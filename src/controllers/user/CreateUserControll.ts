// Recebe diretamente a requisição
// Pegar os parâmetros da requisição
// chama o serviço repassando os dados necessários

import { Request, Response, } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserControll{
   async handle(req: Request, res: Response){

      const {name, email, password} =  req.body;
      const Service = await new CreateUserService().execute({name, email, password});
      return res.json(Service)

 }
}

export {CreateUserControll} 