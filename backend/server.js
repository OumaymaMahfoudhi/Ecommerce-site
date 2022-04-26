const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./Produit");

var cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());



mongoose.connect(
  "mongodb+srv://oumayma:123456CRud@crud.e0aax.mongodb.net/produits?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.put("/update/:id" ,(req,res,next) =>{
   UserModel.updateOne({_id : req.params.id},{...req.body, _id:req.params.id})
  .then(()=> res.status(200).json({message:"objet Modifié ! "}))
  .catch(error => res.status(400).json({error}));
});

app.delete("/delete:id" ,(req,res,next)=>
{
  UserModel.deleteOne({_id : req.params.id})
  .then(() => res.status(200).json({message : "objet supprimé ! "}))
  .catch(error => res.status(400).json({error}));
});

app.get("/one/:id",(req,res,next) =>{
  UserModel.findOne({ _id : req.params.id})
  .then(thing => res.status(200).json(thing))
  .catch(error => res.status(404).json({error}))
})

app.get("/all", (req, res, next) => {
  UserModel.find()
  .then(things => res.status(200).json(things))
  .catch(error => res.status(400).json({error}))
});






//apiuserbegin

//user schema 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login",(req,res)=>{
  const {email,password} =req.body;
  User.findone({email:email},(err,user)=>{
      if(user){
         if(password === user.password){
             res.send({message:"login sucess",user:user})
         }else{
             res.send({message:"wrong credentials"})
         }
      }else{
          res.send("not register")
      }
  })
});
app.post("/Register",(req,res)=>{
  console.log(req.body) 
  const {name,email,password} =req.body;
  User.findOne({email:email},(err,user)=>{
      if(user){
          res.send({message:"user already exist"})
      }else {
          const user = new User({name,email,password})
          user.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })


}) 


//apiend



app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
