import express from "express";
import { json } from "zod";

const app = express();
// app.use(express.json())
// app.use((req , res , next) => {  // custom middleware (alternative of app.use(express.json()))
//     req.on("data", (chunk) => {
//         const res = JSON.parse(chunk.toString())
//         req.body = res
//         next()
//     })
// })
app.use(express.json())

app.use('/admin', (req, res, next) => {
    if (req.body.password === 'SECRET') {
        next()
    }
    else {
        res.end('Invalid user credentials..')
    }
})
app.post('/admin', (req, res) => {
    res.end('Hello admin..')
})

app.use('/', (req, res, next) => {
    console.log('hello')
    next()
})



//creating the custome middleware ..
app.use((req, res, next) => {
    // console.log(req.headers)
  console.log("custom middleware...");
  next();
});

app.get("/", (req, res,next) => {
    res.end("Home Route");
    // next()
});

app.get("/login", (req, res) => {
  res.end("LoggedIn...");
});
app.get("/user", (req, res) => {
  res.end("Getting the data of the users....");
});
app.post("/post", (req, res) => {
    // req.on("data", (chunk) => {
    //     const res = JSON.parse(chunk.toString())
    //     console.log(res)
    // }) OR
    
    const { name } = req.body
    console.log(name)

  res.end("user is making a post");
});

const port = 3000;

app.listen(port, () => {
  // internally it uses the http server of core node
  console.log("app is listening on the port 3000");
});

// const http = http.createServer(() => { })
// http.listen(app)
