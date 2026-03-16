import http from 'http'

const server = http.createServer((req, res) => {
    res.endFile('hello')
})

server.listen(2000)