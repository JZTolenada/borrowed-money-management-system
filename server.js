const express= require("express");
require("dotenv").config();

const connectDB= require("./config/db");
const lenderRoutes= require("./routes/lenderRoutes");
const loanRoutes= require("./routes/loanRoutes");

const app= express();

app.use(express.json());

app.use("/lenders", lenderRoutes);
app.use("/loan", loanRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Borrowed Money Management System API"
    });
})

const startServer= async () => {
    await connectDB();

    app.listen(process.env.PORT, () =>{
        console.log("Server is running...");
    });
}

startServer();

