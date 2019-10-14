const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");

const routes = require("./routes/router");

const port = process.env.PORT || 3000;

require("./config"); // Set Mongodb connection

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/view"));
app.set("view engine", "ejs");

//Routes

app.use("/", routes);

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
