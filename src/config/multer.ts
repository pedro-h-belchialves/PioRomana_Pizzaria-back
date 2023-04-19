import multer from "multer";
import crypto from 'crypto'; // generates a hash
import {extname, resolve} from 'path'

// => https://www.youtube.com/watch?v=wIOpe8S2Mk8
//    https://www.npmjs.com/package/multer

export default{
   upload(folder : string){
      return{
         storage: multer.diskStorage({
            destination: resolve(__dirname, '..', '..', folder),
            filename: (req, file, cb)=> {
               const hash = crypto.randomBytes(8).toString('hex');
               const fileName = `${hash}--${file.originalname}`;
               return cb(null, fileName)
            }
         })
      }
   }
}


/*export default{
   upload(folder : string){ //when asked this method it will be supplied the folder we want to save it
         return{
                         /multer.diskStorage({destination:, filename:(rquest, thisFile,callbackFunction)})           
           storage: multer.diskStorage({
           /The folder to which the file has been saved
             |          /from path   /this folder        /upload's paramter(it will be passed in the router as a middleware)                
            destination: resolve (__dirname, '..', '..', folder),
           
         /The name of the file within the destination
            filename:(req, file, cb) =>{
               const hash = crypto.randomBytes(8).toString('hex'); // criate a hath
               const fileName = `${hash}--${file.originalname}`;// append the hash to the file name (file.originalname)
               return cb(null, fileName) // return the name (hash + fileName)
            }
           })
         }
   } 
}*/










