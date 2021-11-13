const router = require("express").Router();
const { verifyUserAccessToken } = require("../middlewares/jwt");
const { addCake, viewCakes, deleteCake } = require("../controller/cake");


router.post("/add", verifyUserAccessToken, addCake);
router.get("/allCakes", verifyUserAccessToken, viewCakes);
router.delete("/delete/:cakeId", verifyUserAccessToken, deleteCake);

module.exports = router;
