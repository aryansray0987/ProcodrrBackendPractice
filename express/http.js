import http from 'http'

const server = http.createServer((req, res) => {
    res.endFile('hello')
})

server.listen(2000, () => {
    console.log('server is listening on the port number 2000')
})