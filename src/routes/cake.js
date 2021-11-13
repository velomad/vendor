const router = require("express").Router();
const { verifyUserAccessToken } = require("../middlewares/jwt");
const { addCake, viewCakes } = require("../controller/cake");


router.post("/add", verifyUserAccessToken, addCake);
router.get("/allCakes", verifyUserAccessToken, viewCakes);

module.exports = router;
