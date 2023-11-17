import mongoose from "mongoose";

const connection= async() =>{

    // const connectionParams = {
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // }

    try {
        mongoose.connect(process.env.DB)
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
}

export default connection;


// mongoose
//   .connect(process.env.DB)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.log(err);
//   });