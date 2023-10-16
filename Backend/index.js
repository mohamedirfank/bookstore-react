import Express, { request, response } from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = Express()

app.use(Express.json());

//middlewear for handling cors policy
// option 1: allow all origins with defult cors
app.use(cors());

//ooption 2: allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome')
})

app.use('/books', booksRoute)

mongoose.connect(MongoDBURL)
    .then(() => {
        console.log('App Connected to DB');
        app.listen(PORT, () => {
            console.log('App istening port:', PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

