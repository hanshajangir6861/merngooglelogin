// import dotenv from 'dotenv'
// import express from "express"
// import cors from 'cors'
// import "./db/conn.js"
// import session from 'express-session'
// import passport from 'passport'
import OAuth2Strategy from 'passport-google-oauth2'
// import userdb from "./model/userschema.js"

// const clientid = "13877075335-4cobv9unb1j09184u1r05mqhgn303o6i.apps.googleusercontent.com"
// const clientsecret = "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"
// const app = express()
// const PORT = 4000;

// app.use(cors({
//    origin: "http://localhost:3000",
//    methods: "GET ,POST, PUT ,DELETE",
//    credentials: true

// }));
// app.use(express.json())


// //setup session//
// app.use(session({
//    secret: "12345678910",
//    resave: false,
//    saveUninitialized: true


// }))



// //  app.get("/", (req,res)=>{
// //     res.status(200).json("server start")
// //  });

// app.use(passport.initialize())
// app.use(passport.session())


// passport.use(
//    new OAuth2Strategy({
//       clientID: clientid,
//       clientSecret: clientsecret,
//       callbackURL: "/auth/google/callback",
//       scope: ["profile", "email"]
//    },


//       async (accessToken, refreshToken, profile, done) => {
//          console.log( "profile",profile)
//          try {
//             let user = await userdb.findOne({ googleId: profile.id })

//             if (!user) {
//                user = new userdb({
//                   googleId: profile.id,
//                displayName: profile.displayName,
//                email: profile.emails[0].value,
//                image: profile.photos[0].value
//                })
//                await user.save()
//             }
//             return done(null, user)

//          }
//          catch (error) {
//             return done(error, null)
//          }
//       }
//    )


// )


// passport.serializeUser((user, done)=>{
//    done(null , user)
// })


// passport.deserializeUser((user, done)=>{
//    done(null , user)
// })


// //initial google login///

// app.get("/auth/google" ,passport.authenticate("google",{scope:["profile" ,"email"]}))
// app.get("/auth/google/callback" ,passport.authenticate("google",{
//    successRedirect:"http://localhost:3000/dashboard",
//    failureRedirect:"http://localhost:3000/Login"
// }))

// app.get("/login/sucess" ,async(req , res)=>{

//    // console.log("reqqq" ,req.user)

//    if(req.user){
//       res.status(200).json({message : "user login" , user : req.user})
      
//       }
//       else{
//          res.status(400).json({message : "Not autherized" })
      
//       }
// })

// app.get("/logout" ,(req , res ,next)=>{
// req.logout(funcation(error){

// if(error){return next(err)}
// res.redirect("http://localhost:3000")
// })


// })


// app.listen(PORT, () => {
//    console.log(`server start at ${PORT}`)
// });






import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import './db/conn.js'
import userdb from "./model/userSchema.js";
import session from "express-session";
import passport from "passport";
// import { OAuth2Strategy } from "passport-google-oauth20";
// import OAuth2Strategy from "passport-google-oauth20";

const app = express()
const PORT = 4000;




const clientid = "13877075335-4cobv9unb1j09184u1r05mqhgn303o6i.apps.googleusercontent.com"
const clientsecret = "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"



app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
app.use(express.json());

// setup session
app.use(session({
    secret:"12345678910",
    resave:false,
    saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/dashboard",
    failureRedirect:"http://localhost:3000/login"
}))

app.get("/login/sucess" , async(req ,res)=>{
    // console.log("reqq" , req.user);
    if(req.user){
        res.status(200).json({message:"user login" , user:req.user})
    }
    else{
        res.status(400).json({message:"Not Authorized"})
    }
})


app.get("/logout" , (req , res, next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("http://localhost:3000")
    })
})
app.listen(PORT ,()=>{
console.log(`server has run on port no : ${PORT}`)
})