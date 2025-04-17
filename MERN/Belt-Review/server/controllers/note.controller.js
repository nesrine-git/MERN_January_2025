import Note from '../models/note.model.js';
import response from '../utils/response.js';

const noteController = {
  // Create a new note
  createNote: async (req, res, next) => {
    try {
      const newNote = await Note.create(req.body);
      
      response(res, 201, true, '✅ Note created successfully', newNote);
    } catch (error) {
      console.error(error)
      next(error);
    }
  },

  // Get all notes
  getAllNote: async (req, res, next) => {
    try {
      const allNote = await Note.find().sort({ createdAt: -1 });
      response(res, 200, true, '✅ All note retrieved successfully', allNote);
    } catch (error) {
      next(error);
    }
  },

  // Get one note by ID
  getOneNote: async (req, res, next) => {
    try {
      const foundNote = await Note.findById(req.params.id);
      if (!foundNote) {
        return response(res, 404, false, '❌ Note not found');
      }
      response(res, 200, true, '✅ Note found successfully', foundNote);
    } catch (error) {
      next(error);
    }
  },

  // Update a note
  updateNote: async (req, res, next) => {
    const options = { new: true, runValidators: true };
    try {
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, options);
      if (!updatedNote) {
        return response(res, 404, false, '❌ Note not found');
      }
      response(res, 200, true, '✅ Note updated successfully', updatedNote);
    } catch (error) {
      next(error);
    }
  },

  // Delete a note
  deleteNote: async (req, res, next) => {
    try {
      const deletedNote = await Note.findByIdAndDelete(req.params.id);
      if (!deletedNote) {
        return response(res, 404, false, '❌ Note not found');
      }
      response(res, 200, true, '✅ Note deleted successfully', deletedNote);
    } catch (error) {
      next(error);
    }
  }
};

export default noteController;
