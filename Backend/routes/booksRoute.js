import  express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//save for new book
router.post('/', async (request,response) =>{
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

//route for get book for database 
router.get('/', async (request,response) =>{
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count : books.length,
            data : books
        }) 
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message:error.message
        })
    }
})

//route for get one book for database by id
router.get('/:id', async (request, response) =>{
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book) 
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message:error.message
        })
    }
});

//route for update
router.put('/:id', async (request, response) =>{
    try {
        if(!request.body.title || 
            !request.body.auther ||
            !request.body.publishYear){
                return response.status(400).send({
                    message : 'send All request feild :title,auther,publishYear'
                })
            }
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).send({
                message : 'book not found'
            })
        }
        return response.status(200).send({
            message : 'books will be updated'
        }) 
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message:error.message
        })
    }
});

//route for delete a book
router.delete('/:id', async (request, response) =>{
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({
                message : 'book not found'
            })
        }
        return response.status(200).send({
            message : 'books will be deleted'
        }) 
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message:error.message
        })
    }
});

export default router;