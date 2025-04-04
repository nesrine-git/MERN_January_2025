import { Schema, model } from "mongoose";

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for your book!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxLength: [255, "Title must be less than 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "Author name is required!"],
            minlength: [5, "Author name must be at least 5 characters long!"],
            maxLength: [255, "Author name must be less than 255 characters long"]
        },
        pages: {
            type: Number,
            required: [true, "Number of pages is required!"],
            min: [1, "A book must have at least one page!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Book = model("Book", BookSchema);
export default Book;
