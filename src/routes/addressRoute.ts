import express from "express";
import {createAddress, getAddress, updateAddress} from "../controllers";
import {verifyToken} from "../middlewares/verifyToken";

const router = express.Router();

router.get("/", verifyToken, getAddress);

router.get("/:id", verifyToken, getAddress);

router.post("/", verifyToken, createAddress);

router.put("/:id", verifyToken, updateAddress);

export default router;
