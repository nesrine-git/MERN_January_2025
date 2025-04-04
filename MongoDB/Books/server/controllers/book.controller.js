import Book from "../models/book.model.js";

const bookController = {
    //? CRUD Features 
    //! 1. Create a new book functionality
    createBook: async (req, res)=> {
        try {
            const newBook = await Book.create(req.body);
            res.status(201).json({
                success: true,
                message: "Book created successfully!",
                data: newBook,
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "❌ Task creation failed ❌",
                error: error.message
            });
        }
    },

    //! 2. Get all books functionality
    getAllBooks: async (req, res)=> {
        try {
            const allBooks = await Book.find().sort({createdAt: -1}); 
            res.status(200).json({
                success: true,
                message: "✅ All books retrieved successfully ✅",
                data: allBooks,
                
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "❌ All Books not found ❌",
                error: error.message
            }); 
        }
    },
    //! 3. Get One  book functionality
    getOneBook: async (req, res)=> {
        try {
            const foundBook = await Book.findById(req.params.id);
            res.status(200).json({
                success: true,
                message: "✅ Book found successfully ✅",
                data: foundBook
            });

        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "❌ Book not found ❌",
                error: error.message
            });
        }
    },
    //! 4. Update book functionality
    updateBook: async (req, res)=> {
        const options = {
            new: true,
            runValidators: true,
        };
        try {
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
            if (!updatedBook) {
                return res.status(404).json({
                    success: false,
                    message: "❌ Book not found ❌"
                });
            }

            res.status(200).json({
                success: true,
                message: "✅ Book updated successfully ✅",
                data: updatedBook
            });

        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "❌ Book update failed ❌",
                error: error.message
            });
        }
    },
    //! 5. Delete book functionality
    deleteBook: async (req, res)=> {
        try {
            const deletedBook = await Book.findByIdAndDelete(req.params.id);
            if (!deletedBook) {
                return res.status(404).json({
                    success: false,
                    message: "❌ Book not found ❌"
                });
            }
            res.status(200).json({
                success: true,
                message: "✅ Book deleted successfully ✅",
                data: deletedBook
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "❌ Book deletion failed ❌",
                error: error.message
            });
    }
}
}

export default bookController;