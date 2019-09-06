const { Router } = require("express");
const Image = require("./model");
const router = new Router();

router.get("/images", (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
    .catch(err => next(err));
});

module.exports = router;
