import User from "../models/user.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs'



export const sample = (req,res) =>{
    res.send({message:"hi"})
}



//Update User

export const updateUser = async(req,res,next) =>{

    if(req.user.id !== req.params.id){
        return next(errorHandler(401,"you can only update your account"))
    }

    try {
        
        if(req.body.password){
            req.body.password = bcryptjs.hashSync()
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,{
                $set : {
                    name: req.body.name,
                    username:req.body.username,
                    password:req.body.password,
                    profilePicture:req.body.profilePicture,
                }
            },
            {new:true}
        )

        const {password,...rest} = updatedUser._doc;

        res.status(200).json(rest)

        
    } catch (error) {
        next(error)
    }
}



//Delete user

export const deleteUser = async(req,res,next) =>{

    if(req.user.id !== req.params.id){
        return next(errorHandler(401,'You can only delete your account'))

    }
    try {
       await User.findByIdAndDelete(req.params.id) 

       res.status(200).json('User has been deleted...')

    } catch (error) {
     next(error)
    }
}