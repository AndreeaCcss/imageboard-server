const express = require("express");
const db = require("./db");
const imageModel = require("./image/model");
const imageRouter = require("./image/router");
const app = express();

app.use(imageRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
