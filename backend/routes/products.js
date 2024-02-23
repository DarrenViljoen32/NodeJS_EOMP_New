import express from 'express'
// import {getProduct,getProductID,deleteItem,addProduct,editProduct} from '../models/database.js'
import controller from '../controller/products.js'
const router = express.Router()

router 
    .route('/')
            .get(controller.getProds)
            .post(controller.getPost)

router
    .route('/:id')
            

export default router


