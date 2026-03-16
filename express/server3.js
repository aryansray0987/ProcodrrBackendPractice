import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json())

app.use(cors({
    methods: 'POST',
    origin: '*',
    allowedHeaders:'Content-Type'
    
}))
// app.use(express.static('public'))


// One way to set the cors middleware ..........................................................

// app.get('/api', (req, res) => {
//     console.log(req.headers.origin)
// const requiredOrigins = ['http://127.0.0.1:5500', 'http://localhost:5500']
// if (requiredOrigins.includes(req.headers.origin)) {
//     res.set('Access-Control-Allow-Origin' , 'req.headers.origin') use * to all request from all the origin
// }
//     res.json({
//         message:'Hello world get'
//     })
// })
app.get('/', (req, res) =>{
    res.status(200).json({
        message:"Hii from server....."
    })
})
app.post('/api', (req, res) => {

    res.json({
        message:"hello world post"
    })
})
app.listen(3000, () => {
    console.log('server is listening on the port 3000')
})

