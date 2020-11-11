const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageName: {
        type: String,
        default: "none",
        required: true
    },

    imageData: {
        type: Buffer,
        required: true
    }

    }, {
        timestamps: true,
    });

    // gotta add in product ID over here!!!!!!
    //but lemme first get it working with just pics lmao


const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;