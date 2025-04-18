import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
    {
    name: { 
        type: String, 
        required: true,
        minLength: [3, "{PATH} of category must be at least 3 characters long!"],
        maxLength: [120, "{PATH} of category must be at most 120 characters long!"],
    },
    description: { 
        type: String,
        required: true,
        minLength: [3, "{PATH} of category must be at least 3 characters long!"],
        maxLength: [500, "{PATH} of category must be at most 500 characters long!"],
    }
}, { timestamps: true });

const Category = model('Category', CategorySchema);
export default Category;
