const express = require('express');
const app = express();
const connectToMongo = require('./db');
const userRouter = require('./routes/user');

connectToMongo();

app.use(express.json())

app.use('/api/user',userRouter);

app.listen(8000,()=>{
    console.log("connected kid");
})