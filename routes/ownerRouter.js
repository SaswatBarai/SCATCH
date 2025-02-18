import express from 'express';
import ownerModel from '../models/owner-model.js';
const router = express.Router();

if (process.env.NODE_ENV === "development") {
    console.log("Registering /owner/create route");
    router.post("/create", (req, res) => {
        res.send("hello");
    });
}
router.get('/', (req, res) => {
    res.send('Hello World');
});





export default router;
