const Lender= require("../models/Lender");

const createLender= async (req, res) => {
    try{
        const { name, contactNumber, address }= req.body;
        
        const newLender= new Lender({
            name: name,
            contactNumber: contactNumber,
            address: address
        });

        await newLender.save();

        res.status(201).json({
            message: "Lender created successfully.",
            lender: newLender
        });
    
    }catch(error){
        res.status(500).json({
            message: "Server error.",
            error: error.message
        });
    }
};

const getAllLenders= async (req, res) => {
    try{
        const lenders= await Lender.find();

        res.status(200).json({
            lenders
        });
    }catch (error){
        res.status(500).json({
            message: "Server Error.",
            error: error.message
        })
    }
};

const getLenderById= async (req, res) => {
    try{
        const id= req.params.id;

        const lender= await Lender.findById(id);

        if(!lender){
            return res.status(404).json({
                message: "Lender not found"
            })
        }else{
            res.status(200).json({
                lender
            })
        }
    }catch (error){
        res.status(500).json({
            message: "Server error.",
            error: error.message
        })
    }
};

const updateLenderById= async (req, res) => {
    try{
        const { name, contactNumber, address }= req.body;
        const id= req.params.id;
        const updateLender= await Lender.findByIdAndUpdate(
            id,
            {
                name: name,
                contactNumber: contactNumber,
                address: address
            },
            {
                new: true,
                runValidators: true
            }
        );

        if(!updateLender){
            return res.status(404).json({
                message: "Lender not found."
            });
        }

        res.status(200).json({
            message: "Lender updated successfully.",
            lender: updateLender
        });
    }catch (error){
        res.status(500).json({
           message: "Server error.",
           error: error.message 
        })
    }
};

const deleteLenderById= async (req, res) => {
    try{
        const id= req.params.id;

        const deleteLender= await Lender.findByIdAndDelete(id);

        if(!deleteLender){
            return res.status(404).json({
                message: "Lender not found."
            });
        }

        res.status(200).json({
            message: "Lender successfully deleted.",
            lender: deleteLender
        })
    }catch (error){
        res.status(500).json({
            message: "Server error.",
            error: error.message
        });
    };
}

module.exports= { createLender, getAllLenders, getLenderById, updateLenderById, deleteLenderById };