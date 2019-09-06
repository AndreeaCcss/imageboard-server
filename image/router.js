const { Router } = require("express");
const Image = require("./model");
const router = new Router();

router.get("/images", (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
    .catch(err => next(err));
});

router.post("/images", (req, res, next) => {
  Image.create(req.body)
    .then(image => res.json(image))
    .catch(next);
});

module.exports = router;
