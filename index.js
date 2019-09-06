const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const imageRouter = require("./image/router");
const loginRouter = require("./auth/router");
const userRouter = require("./user/router");

const app = express();
const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(loginRouter);
app.use(userRouter);
app.use(imageRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
