const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const staticpath = path.join(__dirname, "../public");
const viewpath = path.join(__dirname, "../template/views");
const partialwpath = path.join(__dirname, "../template/partial");
// const imagepath=path.join(__dirname, "../public/images/jil")


app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views",viewpath)
hbs.registerPartials(partialwpath);

app.get("/", (req,res) => {
    res.render("index");
})
app.get("/about", (req,res) => {
    res.render("about");
})
app.get("/weather", (req,res) => {
    res.render("weather");
})
app.get("/*", (req,res) => {
    res.render("404");
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})