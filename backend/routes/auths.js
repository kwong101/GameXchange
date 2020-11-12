var express = require("express");
var router = express.Router();
var passport = require("passport");
let User = require('../models/user.model');


/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("auths", { title: "Express" });
});

/* GET Google Authentication API. */
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/", session: false }),
	function(req, res) {
		var token = req.user.token;
		var name = req.user.name;
        var email = req.user.email;
        const newUser = new User({name, email});
        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));


		res.redirect("http://localhost:3000?token=" + token);

	}
);



module.exports = router;