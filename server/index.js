import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connection from './db.js'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import path from 'path';


dotenv.config();
connection();



const __dirname = path.resolve();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})


app.use(express.json())

app.use(cookieParser())





//* create routes

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)


//* Use this as middleware

app.use((err,req,res,next) =>{
    const statuscode= err.statuscode || 500;
    const message = err.message || 'Internal Server Error'

    return res.status(statuscode).json({
    success:false,
    message,
    statuscode,
    })
})

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server listining on port http://localhost:${port}`)
}
)

