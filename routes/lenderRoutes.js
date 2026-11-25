const express= require("express");
const { createLender, getAllLenders, getLenderById, updateLenderById, deleteLenderById }= require("../controllers/lenderController");
const router= express.Router();

router.post("/", createLender);
router.get("/", getAllLenders);
router.get("/:id", getLenderById);
router.put("/:id", updateLenderById);
router.delete("/:id", deleteLenderById);

module.exports= router;