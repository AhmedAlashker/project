import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import * as User_Controller from "../user/controller/user.js";
import { endPoint } from "./user.endPoint.js";


const router = Router()



router.get("/profile", auth(endPoint.profile), User_Controller.profile)

router.patch("/updatePassword", auth(endPoint.updatePassword), User_Controller.updatePassword)

router.patch("/signOut",auth(endPoint.profile) ,User_Controller.SignOut);




export default router
