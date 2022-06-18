const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_CONNECTION_LOCAL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })
        console.log("\n****************************************\n".green)
        console.log("\tDatabase Connected".cyan)
        console.log("\n****************************************\n".green)
    }catch(err){
        console.log(err)
    }
}

module.exports = dbConnection;