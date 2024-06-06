import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import ngoroutes from "./routes/ngoroutes.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.js";

import userdb from "./models/userModel.js";

import session from "express-session";


const app = express();
dotenv.config();


connectDB();
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());


const corsOptions = {
  origin: "http://localhost:3001",
  methods: "GET, POST, PUT, DELETE",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


const port = process.env.PORT || 3001;

app.use("/api/users", userRoutes);

app.use("/api/donation", donationRoutes);

app.use("/api/ngo", ngoroutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import path from "path";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import userRoutes from "./routes/userRoutes.js";
// import donationRoutes from "./routes/donationRoutes.js";
// import ngoroutes from "./routes/ngoroutes.js";
// import User from "./models/userModel.js";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";


// dotenv.config();

// const port = process.env.PORT || 3001;

// connectDB();

// const app = express();

// const corsOptions = {
//   origin: "http://localhost:3001",
//   methos: "GET, POST, PUT DELETE",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// google setup code .....................

// import session from "express-session";
// import passport from "passport";
// import OAuth2Strategy from "passport-google-oauth2";

// OAuth2Strategy.Strategy;

// const clientid = process.env.clientid;
// const clientsecret = process.env.clientsecret;

// const sessionOptions = {
//   secret: process.env.secret,
//   resave: true,
//   saveUninitialized: true,
// };

// // Use session middleware before passport
// app.use(session(sessionOptions));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new OAuth2Strategy(
//     {
//       clientID: clientid,
//       clientSecret: clientsecret,
//       callbackURL: "/auth/google/callback",
//       scope: ["profile", "email"],
//     },
//     async (req, accessToken, refreshToken, profile, done) => {
//       // Ensure req.session is defined
//       if (!req.session) {
//         console.error("Session is not initialized.");
//         return done(new Error("Session is not initialized."), null);
//       }

//       // Access req.session.role safely
//       const role = req.session.role || "unknown";
//       // console.log(req.query);
//       try {
//         let user = await User.findOne({ googleID: profile.id });
//         // Rest of your code...
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// // Route for initiating Google OAuth
// app.get("/auth/google", (req, res, next) => {
//   // console.log(req.query.role);
//   req.session.role = req.query.role;
//   passport.authenticate("google", { scope: ["profile", "email"] })(
//     req,
//     res,
//     next
//   );
// });

// // Callback route after successful Google OAuth
// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:3001/login",
//   }),
//   (req, res) => {
//     // Access req.session.role safely
//     const role = req.session && req.session.role ? req.session.role : "unknown";
//     // console.log(role);
//     res.redirect(`http://localhost:3001/auth/google/callback?role=${role}`);
//   }
// );
// // .................end.........................

// // Rest of your server setup...

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(cookieParser());


// app.use("/api/users", userRoutes);

// app.use("/api/donation", donationRoutes);

// app.use("/api/ngo", ngoroutes);

// app.listen(port, () => {
//   console.log(`Server running on port: ${port}`);
// });
