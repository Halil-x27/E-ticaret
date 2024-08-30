const express = require("express");
const router = express.Router();
const authRoute = require("./Auth.js");
const ProductRoute = require("./product.js");
const CategoriRoute = require("./categori.js");
const KuponRoute = require("./Kupons.js");
const UserRoute = require("./User.js");
const paymentRoute = require("./Payment.js");







router.use("/auth", authRoute);
router.use("/product", ProductRoute);
router.use("/categori", CategoriRoute);
router.use("/kupons", KuponRoute);
router.use("/users", UserRoute);
router.use("/payment", paymentRoute);





module.exports = router;