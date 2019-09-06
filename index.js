const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const db = require("./db");
// const imageModel = require("./image/model");
const imageRouter = require("./image/router");

const app = express();
const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(imageRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
