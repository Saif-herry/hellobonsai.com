const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())

const connection = require('./config')
const userRouter = require('./Routes/user.routes')
const ClientRouter = require('./Routes/Client.routes')

app.get('/',(req,res)=>{
    res.send('Welcome in Backend of hellobonsai!!')
})

app.use('/user',userRouter)
app.use('/client',ClientRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connection
        console.log('db connected')
    }
    catch(err){
       console.log('check config',err)
    }
    console.log(`listening on port ${PORT}`)
})

