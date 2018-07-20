const router = require ("express").Router();
const User = require ("../models/User");
const passport = require ("passport");

function isAuth(req,res,next){
    if (req.isAuthenticated()){
        return next();
    }else{
        res.redirect("/login");
    }
}

function isLoggedIn (req,res,next){
    if(req.isAuthenticated()){
        res.redirect("/categories");
    }else{
        next();
    }
}

router.get("/login", isLoggedIn, (req,res)=>{
    res.render("./auth/login")
})

router.post("/login", passport.authenticate("local"), (req,res)=>{
    req.app.locals.user = req.user;
    res.redirect("/categories")
})

router.get("/logout", (req,res)=>{
    req.logout();
    res.redirect("/login")
})

router.post("/signup", (req,res,next)=>{
    if (req.body.password !== req.body.password2){
        req.body.error = "Passwords doesn't match";
        return res.render('./auth/signup', req.body)
        }
    User.register(req.body, req.body.password)
    .then(()=>{
        res.redirect("/categories")
    })
    .catch(e=>{
        req.body.error = "Email address already in use";
        return res.render("./auth/signup", req.body)
    })
})

router.get("/signup", (req,res)=>{
    res.render("./auth/signup")
})

module.exports = router;