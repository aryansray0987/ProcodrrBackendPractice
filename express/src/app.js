import express from 'express'
import cors from 'cors'

import{userRouter} from './routes/router.js'

const app = express()

//global middlewares 
app.use(cors({
    origin: '*',
    // Credential:true
}))
app.use(express.json())

//routes
app.use('/api', userRouter)


app.use((err, req, res, next) => {
    return res.status(401).json({
        message:err.message
    })
})




export { app }

