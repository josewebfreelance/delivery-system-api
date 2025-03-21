require('dotenv').config();
import express from 'express';
import cors from "cors";
import addressRoute from "./routes/addressRoute";
import userRoute from "./routes/userRoute";
import courierRoute from "./routes/courierRoute";
import deliveryRoute from "./routes/deliveryRoute";

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/address', addressRoute);
app.use('/api/couriers', courierRoute);
app.use('/api/deliveries', deliveryRoute);
