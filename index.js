
import dotenv from 'dotenv'
import express from "express";
import cors from 'cors';
import path from 'path'


//dotenv configuration
dotenv.config();


//rest object
const app=express();

//middleware
app.use(cors());
app.use(express.json());


//statics file
app.use(express.static(path.join(__dirname,'./client/build')));

//rotes
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Node Server</h1>');
})

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


//port
const PORT=process.env.PORT || 8000;


//listen
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})