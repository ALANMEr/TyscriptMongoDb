import app from "./app"
import { port } from "./config"
import dbConnection from "./database/db"



/* Listening to the port defined in `./config.ts` */
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
/* Calling the function `dbConnection` which is defined in `./database/db.ts` */
dbConnection()
