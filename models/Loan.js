const mongoose= require("mongoose");

const loanSchema= new mongoose.Schema({
    lenderId: {type: mongoose.Schema.Types.ObjectId, ref: "Lender", required: true},
    principalAmount: {type: Number, required: true},
    interestType: {type: String, enum: ["With Interest", "Without Interest"], required: true},
    interestRate: {type: Number, default: 0},
    repaymentType: {type: String, enum: ["Flexible", "Fixed Monthly"], required: true},
    loanDate: {type: Date, required: true},
    dueDate: {type: Date, required: true},
    status: {type: String, enum: ["Active", "Completed", "Overdue"], default: "Active"},
    createdAt: {type: Date, default: Date.now}
})

const Loan= mongoose.model("Loan", loanSchema);

module.exports= Loan;