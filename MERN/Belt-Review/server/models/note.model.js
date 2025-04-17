import {model, Schema} from 'mongoose';

//* Define the Schema for a Note
const NoteSchema = new Schema(
    {
        //* Note Title
        title: {
            type: String, // * Data type for the note title
            //* Validation for note title
            required: [true, "{PATH} of note is required"],
            minLength: [3, "{PATH} of note must be at least 3 characters long!"],
            maxLength: [120, "{PATH} of note must be at most 120 characters long!"],
        },
        //* Note Content
        content: {
            type: String, // * Data type for the note content
            //* Validation for note content
            required: [true, "{PATH} of note is required"],
            minLength: [3, "{PATH} of note must be at least 3 characters long!"],
            maxLength: [500, "{PATH} of note must be at most 500 characters long!"],
        },
        //* Note important
        important: { 
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true, //* Automatically add createdAt and updatedAt fields
    }
)

//* Create and export the Note model using the defined schema
const Note = model('Note', NoteSchema);

//* Export the Note model
export default Note;