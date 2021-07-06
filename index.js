// const express = require("express");
// const ejs = require("ejs");
// const PORT = 3000;
// const path=require('path');
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const User = require('./models/Users');
// mongoose.connect('mongodb://localhost:27017/msDhoni', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });



// const app = express();

// // For serving the static file - CSS
// app.use('/assets',express.static('assets'));

// // For serving the static file - Images
// app.use(express.static(path.join(__dirname,'assets')));

// // app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get("/", (req, res) => {
//     res.render("index");
// });


// app.get("/register", (req, res) => {
//     res.render("register");
// });

// app.get("/login", (req, res) => {
//     res.render("login");
// });

// ///////PORTS REQUESTS ARE  HERE//////
// app.post('/register', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const newUser = new User({
//         email: email,
//         password: password
//     })
//     newUser.save((err) => {
//         err ? console.log(err) : res.send("Successfully Created User");
//     });
// });

// app.post('/login', (req, res) => {
//     //Code goes here
//     const email = req.body.email;
//     const password = req.body.password;

//     User.findOne({email:email},(err,foundResults)=>{
//         if (err) {
//             console.log(err);
//         }
//         else{
//             if (foundResults.password == password){
//                 res.render('hello');
//             }
//             else{
//                 res.send("Incorrect Email or password");
//             }
//         }
//     });
// });

// //  START THE SERVER
// app.listen(PORT, () => {
//     console.log(`The application started successfully on port ${PORT}`);
// })



const express = require("express");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;
const path=require('path');
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/msDhoni', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });



const app = express();

// For serving the static file - CSS
app.use('/assets',express.static('assets'));

// For serving the static file - Images
app.use(express.static(path.join(__dirname,'assets')));

// app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("front");
});


app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/idhint",(req,res)=>{
    res.render("idhint");
})

app.get("/passwordhint",(req,res)=>{
    res.render("passwordhint");
})

app.get("/foryou",(req,res)=>{
    res.render("foryou");
})

app.get("/memories",(req,res)=>{
    res.render("memories");
})
app.get("/comment",(req,res)=>{
    res.render("comment");
})

///////PORTS REQUESTS ARE  HERE//////
// app.post('/register', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const newUser = new User({
//         email: email,
//         password: password
//     })
//     newUser.save((err) => {
//         err ? console.log(err) : res.send("Successfully Created User");
//     });
// });

// app.post('/login', (req, res) => {
//     //Code goes here
//     const email = req.body.email;
//     const password = req.body.password;

//     User.findOne({email:email},(err,foundResults)=>{
//         if (err) {
//             console.log(err);
//         }
//         else{
//             if (foundResults.password == password){
//                 res.render('home');
//             }
//             else{
//                 res.send("Incorrect Email or password");
//             }
//         }
//     });
// });

app.post('/login', (req, res) => {
    //Code goes here
    const email = "khusboo_sharma_77";
    const password = "07072001";

    
        if (email != "khusboo_sharma_77") {
            console.log("error");
        }
        else if (password != "07072001"){
            console.log("error")
        }

        else if (email == "khusboo_sharma_77" && password == "07072001"){
            res.render('home');
        }
    });


// app.get("/home",(req,res)=>{
//     res.render("home");
// })

//  START THE SERVER
app.listen(PORT, () => {
    console.log(`The application started successfully on port ${PORT}`);
})