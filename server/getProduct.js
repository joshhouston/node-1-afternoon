const products = require('../products.json')




const getProduct = (req, res) => {
    const user = products.find(val => val.id === +req.params.id)
    if(!user){
        
       return res.status(500).send('Item not in list');
    }
    res.status(200).send(user);
}

module.exports = getProduct;