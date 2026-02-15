const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/message", (req, res) => {
    res.render("message");
});

app.get("/agreement", (req, res) => {
    res.render("agreement", { 
        signed: false,
        myName: "Ananth Dev Prajapat"   // your name here
    });
});

app.post("/signed", (req, res) => {
    const herName = req.body.herName;

    res.render("agreement", {
        signed: true,
        myName: "Ananth Dev Prajapat",
        herName: herName
    });
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
