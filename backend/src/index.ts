import app from "./app"
import { port } from "./config"
   

import dbConnection from "./database/db"



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
dbConnection()
