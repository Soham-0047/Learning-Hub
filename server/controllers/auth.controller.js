import User from "../models/user.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";



export const signup = async(req,res,next) =>{

    // console.log(req.body)
    //* Destructure the req body and get the name, email, password

    const {name,username,email,password} = req.body;

    //create a hashpassword
    //* As we used hashSync if not used then can be used async or await

    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser  = new User({name,username,email,password:hashedPassword});

    try {
       await newUser.save();

    res.status(200).json({message:"user signup"})  
    } catch (error) {
        // res.status(500).json(error.message);
        
        next(error)

        //! Maybe here we can use our custom error
        // next(errorHandler(300,'some custom message'))
    }
   
}