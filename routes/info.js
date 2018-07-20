const router = require ("express").Router();
const fetch   = require('node-fetch');

function isAuth(req,res,next){
    if (req.isAuthenticated()){
        return next()
    }else{
        res.redirect("/login");
    }
}

router.get('/details/:id', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
        let product = products.find(p=>p.id==req.params.id)
        res.render("./info/details", product);
    });
});

router.get('/nailPolish', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});    

router.get('/mascara', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/lipStick', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipStick&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/lipLiner', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/foundation', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/eyeshadow', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/eyeliner', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/bronzer', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/blush', isAuth, (req, res) => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&product_tags=Vegan')
    .then(results => results.json())
    .then(products => {
      res.render("./info/products", {products}); 
    });
});

router.get('/categories', isAuth, (req, res) =>{
    res.render("./info/categories")
})

module.exports = router;