import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type : String,
            Request : true,
        },
        auther:{
            type : String,
            Request : true,
        },
        publishYear:{
            type : String,
            Request : true,
        },
    },
    
    {
      timestamps: true
    } 
);


export const Book = mongoose.model('Cat', bookSchema)