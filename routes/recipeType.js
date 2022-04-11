const express = require("express");
const router = express.Router();

const { create, list, read, update, removeSoft, typeCount} = require("./../controllers/recipeType");

// Endpoints
router.post("/type", create);
router.get("/types", list);
router.get("/type/:slug", read);
router.put("/type/:slug", update);
router.patch("/type/:slug", removeSoft);
router.get("/type/total", typeCount);

module.exports = router;
