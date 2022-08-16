import collection from "../config/db.js"
import bigPromise from "../middlewares/bigPromise.js"
import  {ObjectId} from "mongodb";


export const getAllEvents=bigPromise(async(req,res,next)=>{
    console.log(req.params.id)
    const allEvents = await collection.find({}).toArray();
    res.status(200).json({
        success:true,
        allEvents
    })

})

export const getEventById=bigPromise(async(req,res,next)=>{
    console.log(req.params.id)
    const findResult = await collection.find({_id:ObjectId(req.params.id)}).toArray();
    res.status(200).json({
        success:true,
        findResult
    })

})

export const postEvent=bigPromise(async(req,res,next)=>{
    const dataJson=req.body;
    // console.log(dataJson)
    try {
        const createEvent=await collection.insertOne(dataJson);
        res.status(201).json({
            success:true,
            message:"Event Created Successfully!",
            createEvent
        })
    } catch (error) {
        console.log(error)
        res.json(error.message)
    }
})


export const findByIdAndUpdateEvent=bigPromise(async(req,res,next)=>{
    const newData=req.body;
    console.log(req.body)
    const updateEvent=await collection.findOneAndUpdate({_id:ObjectId(req.params.id)},{$set:newData});
    const updatedEvent = await collection.find({_id:ObjectId(req.params.id)}).toArray();
    res.status(200).json({
        success:true,
        message:"Updated Event By Id Successfully!",
        updatedEvent
    })
})

export const findByIdAndDeleteEvent=bigPromise(async(req,res,next)=>{
    console.log(req.body)
    const deletedEvent=await collection.deleteOne({_id:ObjectId(req.params.id)});
    res.status(200).json({
        success:true,
        message:"Deleted Event By Id Successfully!",
        deletedEvent
    })
})

export const getEventByTypeLimitPage=bigPromise(async(req,res,next)=>{
   console.log(req.query)
   res.status(200).json({
       success:true,
       message:"s"
   })
})






