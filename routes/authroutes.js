const {Router} = require("express");
const router = Router();


const {login, register} = require("../controllers/authcontrollers");

router.get("/login", login);
router.post("/register", register);

module.exports = router;