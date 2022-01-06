import cors from "cors"
import express from "express"
import { router } from "./routes"

export const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))