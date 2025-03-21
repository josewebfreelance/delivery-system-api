import express from "express";
import {createUser, findUser, getUsers, updateUser} from "../controllers";
import {verifyToken} from "../middlewares/verifyToken";

const router = express.Router();

router.get("/", verifyToken, getUsers);

router.get("/:id", verifyToken, findUser);

router.post("/", verifyToken, createUser);

router.put("/:id", verifyToken, updateUser);

export default router;
