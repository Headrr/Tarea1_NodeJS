const express = require("express");
const router = express.Router();

const { create, listOrigin, read, update, removeSoft, originCount} = require("./../controllers/recipeOrigin");

// Endpoints
router.post("/origin", create);
router.get("/origin", listOrigin);
router.get("/origin/:slug", read);
router.put("/origin/:slug", update);
router.patch("/origin/:slug", removeSoft);
router.get("/origin/total", originCount);

module.exports = router;
