const router = require ("express").Router();
const Product = require ("../models/Product");
const Address = require ("../models/Address");
const fetch   = require('node-fetch');
const Cart = require ("../models/Cart");

function isAuth(req,res,next){
    if (req.isAuthenticated()){
        return next()
    }else{
        res.redirect("/login");
    }
}

router.post("/checkout", isAuth, (req,res)=>{
    Address.create(req.body)
    .then(()=>{
        res.redirect("/categories")
    })
})

router.get("/checkout", isAuth, (req,res)=>{
    Product.find(function(e,docs){
        let productGroup = [];
        let groupSize = 4;
        for (let i = 0; i < docs.length; i += groupSize){
            productGroup.push(docs.slice(i, i + groupSize));
        }
        res.render("shoppingCart/checkout", {products : productGroup})
    })    
})

router.post('/cart/:id', isAuth, (req,res,next)=>{
    req.body.user=req.user._id
    Product.create(req.body)
    .then(()=>{
        res.redirect("/categories")
    })
    .catch(e=>{
        return res.redirect("/checkout", req.body)
    })
})

router.get('/cart/:id', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
        let product = products.find(p=>p.id==req.params.id)
        res.render("./shoppingCart/cart", product);
    });
});

module.exports = router;