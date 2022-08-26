/** @format */

const router = require("express").Router();
const ApiControlller = require("../controller/ApiControlller");
// const { uploadMultiple, uploadSingle } = require("../middlewares/Multer");

router.get("/landing-page", ApiControlller.landingPage);
router.get("/details-page/:id", ApiControlller.detailsPage);
module.exports = router;
