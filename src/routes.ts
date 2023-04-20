import {Router} from "express"
import multer from "multer";

//     IMPORT USERS:::::::::::::::::::::::::::::
import { CreateUserControll } from "./controllers/user/CreateUserControll";
import { AuthUserController } from "./controllers/user/AuthUserControll";
import { DetailUserControll } from "./controllers/user/DetailUserControll";

//     IMPORT CATEGORIES :::::::::::::::::::::::
import { CreateCategoryControll } from "./controllers/category/CreateCategoryControll";
import { ListCategoryControll } from "./controllers/category/ListCategoryControll";

//     IMPORT PRODUCTS :::::::::::::::::::::::
import { CreateProductController } from "./controllers/products/CreateProductController";
import { ListByCategoryControll } from "./controllers/products/ListByCategoryControll";

//     IMPORT ORDERS :::::::::::::::::::::::
import { CreateOrderControll } from "./controllers/orders/CreateOrderControll";
import { RemuveOrderControll } from "./controllers/orders/RemuveOrderControll";
import { CreateItemControll } from "./controllers/orders/CreateItemControll";
import { DeletItemControll } from "./controllers/orders/DeletItemControll";
import { SendOrderControll } from "./controllers/orders/SendOrderControll";
import { ListOrderControll } from "./controllers/orders/ListOrderControll";
import { DetaleOrderControll } from "./controllers/orders/DetaleOrderControll";
import { ConcludeOrderControll } from "./controllers/orders/ConcludeOrderControll";


//     IMPORT MIDDLEWERES
import { isAuth } from "./middlewares/isAuth";
import uploadConfig from './config/multer'


const router = Router();
const upload =multer(uploadConfig.upload('./temp'))

    // Rotas Users ::::::::::::::::::::::::::::::::
   router.post('/users', new CreateUserControll().handle);
   router.post('/login', new AuthUserController().handle);
   router.get('/info', isAuth,  new DetailUserControll().handle)

    // Rotas Category :::::::::::::::::::::::::::::
   router.post('/category', isAuth, new CreateCategoryControll().handle);
   router.get('/category', isAuth, new ListCategoryControll().handle)

    // Rotas Products :::::::::::::::::::::::::::::
   router.post('/product', isAuth, upload.single('file'), new CreateProductController().handle );
   router.get('/product', isAuth, new  ListByCategoryControll().handle)

    // Rotas oreders:::::::::::::::::::::::::::::
   router.post('/order', isAuth, new CreateOrderControll().handle) 
   router.delete('/order', isAuth, new RemuveOrderControll().handle)
   router.post('/order/item', isAuth, new CreateItemControll().handle)
   router.delete('/order/item', isAuth, new DeletItemControll().handle)
   router.put('/order/send', isAuth, new SendOrderControll().handle)
   router.get('/orders', isAuth, new ListOrderControll().handle)
   router.get('/order/detail', isAuth, new DetaleOrderControll().handle)
   router.put('/order/conclude', isAuth, new ConcludeOrderControll().handle)

export { router };  