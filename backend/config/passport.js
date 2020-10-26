var passport = require("passport");
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
);