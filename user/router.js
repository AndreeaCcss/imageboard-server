const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/user", (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send("Missing data");
  } else {
    const user = {
      email: email,
      password: bcrypt.hashSync(password, 10)
    };
    User.create(user)
      .then(user => res.json(user))
      .catch(next);
  }
});

module.exports = router;
