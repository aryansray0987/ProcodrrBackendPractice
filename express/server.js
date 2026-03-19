import 'dotenv/config'
import { app } from './src/app.js'
import express from 'express'


// connectTODB()
app.use(express.text()); // when ecntype = plain/text
app.use(express.urlencoded({extended:true})) // when enctype = urlencoded

app.get('/{:id}', async(req, res) => { // express v5 (single level nested route)
    res.send('hello my name is aryan gupta') 
})


const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log(`server is listening on the port :: ${port}`)
})

