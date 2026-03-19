import 'dotenv/config'
import { app } from './src/app.js'
import express from 'express'


// connectTODB()
app.use(express.text()); // when ecntype = plain/text
app.use(express.urlencoded({extended:true})) // when enctype = urlencoded

app.get('/{:id}', async (req, res) => { // express v5 (single level nested route)
   
    const id = req.params.id;
    res.json({
        message:id
    })
})
app.get('/user/:id/comment/:cid', (req, res) => {
    res.json({
        message:`${req.params.id} + ${req.params.cid}`
    })
})
app.get('/\d/', (req, res) => { // we can also set the regular expression in the route url
    res.json({
        message:'regular expression'
    })
})

const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log(`server is listening on the port :: ${port}`)
})

const a = 34;
