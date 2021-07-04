import express from "express";
import cors from "cors";
import db from "./db/connection";
import userRouter from "./routes/user";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('Hello world')
})

app.use('/api/users', userRouter);

app.listen(PORT, async () => {
    try {
        console.log(`Api listen in port ${PORT}`)
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})
