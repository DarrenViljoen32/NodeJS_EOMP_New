import {getProduct,addProduct,} from '../models/database.js'

export default {
    getProds : async(req,res)=>{
        res.send(await getProduct())
    },
    getPost : async(req,res)=>{
        const {product_Url,product_Name,product_Price,product_Description} = req.body //creating 1 variable for name and age
        const post = await addProduct(product_Url,product_Name,product_Price,product_Description)
        res.send(await getProduct())
    },

}