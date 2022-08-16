import express from "express";
const app=express();
const port = process.env.PORT||9000


// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import eventRoutes from "./routes/eventRoutes.js"

// router middleware
app.use("/api/v3/app/",eventRoutes);


app.listen(port,()=>{
    console.log(`listening at port http://localhost:${port}`)
})