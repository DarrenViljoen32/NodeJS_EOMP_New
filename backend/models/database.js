import mysql from 'mysql2'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()

const getProduct = async()=>{
    const [result] = await pool.query(`
        SELECT *
        FROM products
    `)
    return result
}
const deleteItem = async(product_ID) => {
    const [result] = await pool.query(`
        DELETE FROM products WHERE (product_ID) = (?)
    `,[product_ID])
    return result
}

const addProduct = async(product_Url,product_Name,product_Price,product_Description) => {
    const [item] = await pool.query(`
    INSERT INTO products (product_Url,product_Name,product_Price,product_Description) VALUES (?,?,?,?)
    `,[product_Url,product_Name,product_Price,product_Description])
    return getProduct(item)
}

export {getProduct,deleteItem,addProduct}