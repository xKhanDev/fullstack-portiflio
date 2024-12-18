import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    previewLink: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{timestamps: true});

const Project = mongoose.model("Project",projectSchema);
export default Project;