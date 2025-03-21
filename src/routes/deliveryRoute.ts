import express from 'express';
import {createDelivery, deleteDelivery, findDelivery, getDeliveries, updateDelivery} from "../controllers";
import {verifyToken} from "../middlewares/verifyToken";

const router = express.Router();

router.get('/', verifyToken, getDeliveries);

router.get('/:id', verifyToken, findDelivery);

router.post('/', verifyToken, createDelivery);

router.put('/:id', verifyToken, updateDelivery);

router.delete('/:id', verifyToken, deleteDelivery);

export default router;
