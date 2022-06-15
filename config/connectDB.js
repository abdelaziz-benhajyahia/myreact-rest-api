// require mongoose
const mongoose = require("mongoose")

// connectDB
const connectDB = async () => {
    try {
        // Step 1
        await mongoose.connect(process.env.DB_URI)
        // Step 2
        console.log("Database connected ...")
    } catch (error) {
        console.log("Database not connected !!", error)
    }
}

// export
module.exports = connectDB