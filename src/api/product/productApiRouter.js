const router = require("express").Router();
const controller = require("./productApiController");

// router.get("/", controller.renderByField);

router.post("/add/:productID", controller.addToCart);

router.post("/review/:productID", controller.postReview);

router.post("/search", controller.search);

router.get("/field", controller.renderByField);

router.get("/", controller.render);

router.get("/review/:productID", controller.switchPage);

module.exports = router;

