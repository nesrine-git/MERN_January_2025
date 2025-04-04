import bookController from "../controllers/book.controller.js";

import { Router } from "express";


const router = Router();

//? CRUD Routes Features
//! 1. Create a new book route
      router.route('/books/create')
            .post(bookController.createBook)

//! 2. Get all books route
      router.route("/books")
            .get(bookController.getAllBooks)

//! 3. Get One book route
      router.route("/books/:id")
            .get(bookController.getOneBook)

//! 4. Update book route
      router.route("/books/:id/edit")
            .put(bookController.updateBook)

//! 5. Delete book route
      router.route("/books/:id/delete")
            .delete(bookController.deleteBook)


export default router;