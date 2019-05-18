const express = require("express");
const app = express()
const products = require('../products.json')

const getProducts = ((req, res) => {
    if(req.query.price){
        const filterMe = products.filter(thisPrice => thisPrice.price >= +req.query.price)
        return res.status(200).send(filterMe)
    }
    res.status(200).send(products) 
    
})



module.exports = getProducts
