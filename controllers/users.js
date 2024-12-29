const User = require("../models/user.js");

module.exports.renderSignupForm =  (req, res) => {
    res.render("users/signup.ejs")
};

module.exports.signUp = async(req, res) => {
    try {
    let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "Welcome to wonderlust!")
        res.redirect("/listings")
    });
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderform =  (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login =  (req, res) => {
    req.flash("success", "welcome back to wonderlust! You are logged in!");
    let redirectURL = res.locals.redirectUrl || "/listings"
    res.redirect(redirectURL);
};

module.exports.logOut =  (req, res, next) => {
    req.logOut((err) => {
        if(err) {
           return next(err);
        }
        req.flash("success", "you are logged out");
        res.redirect("/listings");
    })
};