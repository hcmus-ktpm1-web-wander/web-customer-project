const express = require("express");
const router = express.Router();
const checkController = require("./checkController");

/*************************** GET methods ***************************/
//render check out page
router.get("/", checkController.render);

/*************************** POST methods ***************************/

/*************************** PUT methods ***************************/

/*************************** DELETE methods ***************************/

module.exports = router;