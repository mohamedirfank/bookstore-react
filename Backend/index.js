import Express, { request, response }  from "express";
import { PORT, MongoDBURL } from "./config.js"
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"

const app = Express()

app.use(Express.json());

app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome')
})

mongoose.connect(MongoDBURL)
.then(() => {
    console.log('App Connected to DB');
    app.listen(PORT, () => {
        console.log('App istening port:', PORT);
    })
})
.catch((error) =>{
    console.log(error)
})

app.post('/books', async (request,response) =>{
    try {
        if(!request.body.title || 
            !request.body.auther ||
            !request.body.publishYear){
                return response.status(400).send({
                    message : 'send All request feild :' ,title,auther,publishYear
                })
            }
        const newBook = {
            title: request.body.title,
            auther: request.body.auther,
            publishYear: request.body.publishYear
        };
        const book = await Book.create(newBook)
        return response.status(201).send(book)
    } catch (error) {
        console.log(error.message)
        response.status(500).send({
            message:error.message
        });        
    }
});

app.get('/books', async (request,response) =>{
    try {
        const books = await Book.find({});
        return response.status(200).json(books) 
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message:error.message
        })
    }
})