import noteController from "../controllers/note.controller.js";

import { Router } from "express";


const router = Router();

//? CRUD Routes Features
//! 1. Create a new note route
      router.route('/notes/create')
            .post(noteController.createNote)

//! 2. Get all notes route
      router.route("/notes")
            .get(noteController.getAllNote)
            //.get(noteController.getAllNoteByCategory)

//! 3. Get One note route
      router.route("/notes/:id")
            .get(noteController.getOneNote)

//! 4. Update note route
      router.route("/notes/:id/edit")
            .put(noteController.updateNote)

//! 5. Delete note route
      router.route("/notes/:id/delete")
            .delete(noteController.deleteNote)


export default router;