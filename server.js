// need to define this in top if we are using env
require('dotenv').config();

const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

// database connection function alling here
connectDb();

const app=express();

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
