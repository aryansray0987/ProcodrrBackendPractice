import express from 'express';
import cors from 'cors'


const app = express();
app.use(cors())

app.get('/', (req, res) => {
    console.log(req.headers)
    res.set({
        'Set-Cookie':'name = aryan;httpOnly'
    })
    res.status(200).json({
       message:'Home page..'
   })
})

app.listen(3000, () => {
    console.log('app is listening on the port 3000...')
})
