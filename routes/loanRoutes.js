const express= require("express");
const { createLoan, getAllLoans, getLoanById, updateLoanById, deleteLoanById }= require("../controllers/loanController");
const router= express.Router();

router.post("/", createLoan);
router.get("/", getAllLoans);
router.get("/:id", getLoanById);
router.put("/:id", updateLoanById);
router.delete("/:id", deleteLoanById);

module.exports= router;