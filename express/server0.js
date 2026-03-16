import express from 'express';

const app = express();
// console.log(app)

app.disable('x-powered-by') // we can also use the helmet package
app.get('/', (req, res , next) => {//request handler middleware
    // res.send('hello world') equivalent to:// sends data in the html format OR you setHeader and end
    // res.setHeader('content-type', "text/html" , 'charset = utf-8') //header can be set
    //res.end('hello world')

    console.log('This is middleware 1')
    res.write('hello world 1')
    next()//calls the next middleware
}, (req, res) => {// request handler middleware
    // try {
    //     console.log('This is middleware 2')//if logic is correct no error
    // we can also throw the error if the condition is wrong
    //          const error = new Error('page not found error...')
    // } catch (error) { // if logic is incorrect or error occur then next is called to handle the error
    //     console.log(error)
    //     next('error occur in the server ...')//message is passed to the next middleware
    // }
    console.log('This is middleware 2')
    res.write('hello world 2')
    next(undefined)
}, (err, req, res, next) => {
    console.log('Running error middleware')
    res.end('error found...')
}, (req, res) => {
    console.log('This is middleware 3')
    res.end('hello world 3')
})

app.listen(3000, () => {
    console.log(`port is listening on the port 3000...`);
    
})