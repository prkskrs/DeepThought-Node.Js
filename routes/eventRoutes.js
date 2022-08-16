import express from "express"
const router = express.Router()

// import controller 
import { getAllEvents, getEventById, postEvent,findByIdAndUpdateEvent, findByIdAndDeleteEvent, getEventByTypeLimitPage } from "../controllers/eventController.js";


// import userMiddlewares
router.route("/events").get(getAllEvents)
router.route("/events/:id").get(getEventById)
router.route("/events").post(postEvent)
router.route("/events/:id").put(findByIdAndUpdateEvent)
router.route("/events/:id").delete(findByIdAndDeleteEvent)
router.route("/events").get(getEventByTypeLimitPage)



export default router;