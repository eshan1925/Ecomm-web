var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
router.post('/signUp', function (req, res, next) {
    addToDB(req, res);
});

async function addToDB(req, res) {
    var user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: User.hashPassword(req.body.password),
    });

    try {
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch (err) {
        return res.status(501).json(err);
    }
}

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return res.status(501).json(err); }
        if (!user) { return res.status(501).json(info); }
        req.logIn(user, function (err) {
            if (err) { return res.status(501).json(err); }
            return res.status(200).json({ message: "Login Success" });
        });
    })(req, res, next);
});

router.get('/checkout', isValidUser, function (req, res, next) {
    return res.status(200).json(req.user);
});

router.get('/logout', isValidUser, function (req, res, next) {
    req.logout();
    return res.status(200).json({ message: 'Logout Success' });
});

function isValidUser(req, res, next) {
    if (req.isAuthenticated()) next();
    else return res.status(401).json({ message: 'Unauthorized Request' });
}

module.exports = router;