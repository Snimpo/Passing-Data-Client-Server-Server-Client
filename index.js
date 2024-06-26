import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  //on this line we sum the number of leter the user input submitting his/her name
const numberOfLetters = req.body["fName"].length + req.body["lName"].length; 
console.log(numberOfLetters);

res.render("index.ejs", {
  nLetters: numberOfLetters 
});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
