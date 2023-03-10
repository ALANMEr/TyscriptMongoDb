/* Creating a schema for the video model. */
import { Schema, model } from 'mongoose';

const videoSchema= new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
//    video:{
//         versionKey: false,
//        timestamps: true
//     }
});

export default model("Video",videoSchema)