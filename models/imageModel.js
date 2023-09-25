import mongoose from "mongoose";


const imageSchema = mongoose.Schema({
    name: {
        type: string,
        required:true
    },
    prescriptionImage: {
        data: Buffer,
        contentType: string
    },
});

export default mongoose.model("Image", imageSchema);