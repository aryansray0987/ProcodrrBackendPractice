import 'dotenv/config'
import { app } from './src/app.js'


// connectTODB()

const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log(`server is listening on the port :: ${port}`)
})

