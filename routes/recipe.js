const express = require("express");
const router = express.Router();

const { create, recipesCount, listAll, removeSoft, read, update, list } = require("../controllers/recipe");

// Endpoints
router.post("/recipe", create);
router.get("/recipes/total", recipesCount);
router.get("/recipes/:count", listAll);
router.patch("/recipe/:slug", removeSoft);
router.get("/recipe/:slug", read);
router.put("/recipe/:slug", update);
router.get("/recipes", list);

module.exports = router; 