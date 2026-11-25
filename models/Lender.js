const mongoose= require("mongoose");

const lenderSchema= new mongoose.Schema({
    name:{type: String, required: true},
    contactNumber: {type: String, required: true},
    address: String,
    createdAt: {type: Date, default: Date.now}
});

const Lender= mongoose.model("Lender", lenderSchema);

module.exports= Lender;