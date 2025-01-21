// depends
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();

// Middleware 

app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUnititialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        function(accessToken, refreshToken, profile, done){
            // handle user profile here
            return done(null, profile)
        }
    )
);

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((user,done) =>{
    done(null, user);
});

// Routes

app.get('/auth/google', passport.authenticate('google',{scope:['profile', 'email']}));

app.get('/auth/google/callback', 
    passport.authenticate('google', {
        failureRedirect: '/login',
    }),
    (req, res) =>{
        // successful authentication
        res.redirect('/');
    }
);

app.get('/', (req, res) =>{
    req.send(`Hello, ${req.user ? req.user.displayName: "Guest"}!`);
});

app.get('/logout', (req,res)=>{
    req.logout(() =>{
        res.redirect('/')
    });
});

// server Setup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost${PORT}`);
})


