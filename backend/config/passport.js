// new login: 
// Everything here is new 
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
		User.findById(jwt_payload.id)
			.then(user => {
			if (user) {
				return done(null, user);
			}
			return done(null, false);
			})
			.catch(err => console.log(err));
		})
	);
};



// new login:
// commented all this out

/* var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: "880664019306-8j5nfs5ncdqoqv95ls2tbif55hchp3j6.apps.googleusercontent.com",
			clientSecret: "wCik6olsx9G2hvRvvpsBdZgQ",
			callbackURL: "http://localhost:5000/auth/google/callback"
		},
		function(accessToken, refreshToken, profile, done) {
			var userData = {
				email: profile.emails[0].value,
				name: profile.displayName,
				token: accessToken
			};
			done(null, userData);
		}
	)
); */