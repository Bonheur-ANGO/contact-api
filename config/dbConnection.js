const mongoose = require("mongoose")

const connectDb = async () =>{
    try {
        const connect = await mongoose.connect("mongodb+srv://admin:admin@cluster0.hoillpk.mongodb.net/my_contacts?retryWrites=true&w=majority")
        console.log("Database connected", connect.connection.host);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb