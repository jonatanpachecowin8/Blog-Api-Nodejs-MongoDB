const mongoose = require('mongoose')

const dbConnnect = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('DB connect Successfully')

    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

dbConnnect()