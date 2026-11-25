const Loan= require("../models/Loan");
const Lender= require("../models/Lender");

const createLoan= async (req, res) => {
    try{
        const { lenderId, principalAmount, interestType, interestRate, repaymentType, loanDate, dueDate}= req.body;

        const lender= await Lender.findById(lenderId);

        if(!lender){
            return res.status(404).json({
                message: "Lender not found."
            });
        }

        const newLoan= new Loan({
            lenderId,
            principalAmount,
            interestType,
            interestRate,
            repaymentType,
            loanDate,
            dueDate
        });

        await newLoan.save();

        res.status(201).json({
            message: "Loan created successfully.",
            loan: newLoan
        });

    }catch (error){
        res.status(500).json({
            message: "Server Error.",
            error: error.message
        });
    }
};

const getAllLoans= async (req, res) => {
    try{
        const loans= await Loan.find().populate("lenderId");

        res.status(200).json({
            loans
        })
    }catch (error){
        res.status(500).json({
            message: "Server Error.",
            error: error.message
        })
    }
};

const getLoanById= async (req, res) => {
    try{
        const id= req.params.id;

        const loan= await Loan.findById(id).populate("lenderId");

        if(!loan){
            return res.status(404).json({
                message: "Loan not found."
            })
        };

        res.status(200).json({
            loan
        });

    }catch (error){
        res.status(500).json({
            message: "Server Error.",
            error: error.message
        })
    }
};

const updateLoanById= async (req, res) => {
    try{
        const id= req.params.id;

        const { principalAmount, interestType, interestRate, repaymentType, loanDate, dueDate }= req.body;

        const updateLoan= await Loan.findByIdAndUpdate(
            id,
            {
                principalAmount,
                interestType,
                interestRate,
                repaymentType,
                loanDate,
                dueDate
            },
            {
                new: true,
                runValidators: true
            }
        ).populate("lenderId");

        if(!updateLoan){
            return res.status(404).json({
                message: "Loan not found."
            });
        }

        res.status(200).json({
            message: "Loan updated successfully.",
            loan: updateLoan
        });
    
    }catch (error){
        res.status(500).json({
            message: "Server Error.",
            error: error.message
        });
    }
};

const deleteLoanById= async (req, res) => {
    try{
        const id= req.params.id;

        const deleteLoan= await Loan.findByIdAndDelete(id);

        if(!deleteLoan){
            return res.status(404).json({
                message: "Loan not found."
            });
        }

        res.status(200).json({
            message: "Loan successfully deleted.",
            loan: deleteLoan
        });

    }catch (error){
        res.status(500).json({
            message: "Server Error.",
            error: error.message
        });
    }
};

module.exports= { createLoan, getAllLoans, getLoanById, updateLoanById, deleteLoanById };