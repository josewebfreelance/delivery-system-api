import express from "express";
import {createCourier, findCourier, getCouriers, updateCourier} from "../controllers";
import {verifyToken} from "../middlewares/verifyToken";

const router = express.Router();

router.get("/", verifyToken, getCouriers);

router.get("/:id", verifyToken, findCourier);

router.post("/", verifyToken, createCourier);

router.put("/:id", verifyToken, updateCourier);

export default router;
