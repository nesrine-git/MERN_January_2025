import Book from '../models/book.model.js';
import response from '../utils/response.js';

const bookController = {
  // Create a new book
  createBook: async (req, res, next) => {
    try {
      const newBook = await Book.create(req.body);
      
      response(res, 201, true, '✅ Book created successfully', newBook);
    } catch (error) {
      console.error(error)
      next(error);
    }
  },

  // Get all books
  getAllBooks: async (req, res, next) => {
    try {
      const allBooks = await Book.find().sort({ createdAt: -1 });
      response(res, 200, true, '✅ All books retrieved successfully', allBooks);
    } catch (error) {
      next(error);
    }
  },

  // Get one book by ID
  getOneBook: async (req, res, next) => {
    try {
      const foundBook = await Book.findById(req.params.id);
      if (!foundBook) {
        return response(res, 404, false, '❌ Book not found');
      }
      response(res, 200, true, '✅ Book found successfully', foundBook);
    } catch (error) {
      next(error);
    }
  },

  // Update a book
  updateBook: async (req, res, next) => {
    const options = { new: true, runValidators: true };
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
      if (!updatedBook) {
        return response(res, 404, false, '❌ Book not found');
      }
      response(res, 200, true, '✅ Book updated successfully', updatedBook);
    } catch (error) {
      next(error);
    }
  },

  // Delete a book
  deleteBook: async (req, res, next) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return response(res, 404, false, '❌ Book not found');
      }
      response(res, 200, true, '✅ Book deleted successfully', deletedBook);
    } catch (error) {
      next(error);
    }
  }
};

export default bookController;
