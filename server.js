const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, Aye</h1>")
});

app.get("/contact", function(req, res){
  res.send("Contact me at: olusolajaiyeola@gmail.com")
});

app.get("/about", function(req, res){
  res.send("I'm Olusola, a Fullstack and Blockchain Developer, I write smart contact with Javascript and Python")
});

app.get("/hobbies", function(req, res){
  res.send("I love to listen to music and code")
});









app.listen(3000, function(){
  console.log("server started on port 3000")
});



