const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const port = 3055;

const app = express();

app.use(json());
app.use(cors());

app.use(express.static(`${__dirname}/index.html`));



const path = require("path")
app.get("*", (req, res, next) => {
 res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});