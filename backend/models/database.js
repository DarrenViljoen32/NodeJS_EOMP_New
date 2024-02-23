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

const getSingle = async(prodID) =>{
    const [result] = await pool.query(`
    SELECT *
    FROM products
    WHERE prodID = ?
    `,[prodID])
    return result
}

// to delete an item
const deleteItem = async(prodID) => {
    const [result] = await pool.query(`
        DELETE FROM products WHERE (prodID) = (?)
    `,[prodID])
    return result
}

const addProduct = async(prodName,amount,Category,prodUrl) => {
    const [item] = await pool.query(`
    INSERT INTO products (prodName,amount,Category,prodUrl) VALUES (?,?,?,?)
    `,[prodName,amount,Category,prodUrl])
    return getProduct(item)
}

const editProduct = async(prodName,amount,Category,prodID)=>{
    const [item] = await pool.query(`
        UPDATE products
        SET prodName=?, amount=?, Category=?
        WHERE (prodID=?)
    `,[prodName,amount,Category,prodID])
    return item
}


export {getProduct,deleteItem,getSingle,addProduct,editProduct}