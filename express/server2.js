// express to send the static files ...
import express from 'express'

const app = express();
app.use(express.static('Data'))// behind the scene it uses stream ..(It serve all the files from data folder)

app.get('/', (req, res) => {
    res.sendFile('C:/Users/admin/OneDrive/Desktop/JS revision/procodrr/express/index.html')//always absolute path .... not relative
})

app.listen(3000, () => {
    console.log('app is listening on the port 3000..');
    
})