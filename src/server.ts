import  express, {Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from 'cors';
import path from 'path'

const app = express();

app.use(cors()); // cors( ) habilita qualquer URL ou IP a fazer a requisição da API
app.use(express.json());
app.use(router);
//                        / The express.static is a middleware that is integrated into express that allows you to indicate where will be the static files to be loaded.
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')))// create a static path and browse the file name in the path /files/filename.jpg...
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        // if it's an error instance:::::::::::
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json("Erro severo")
})

app.listen(2000, ()=> {console.log("online")})