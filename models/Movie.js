const mongoose = require('mongoose');
const {Schema} = mongoose;
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    // Use Embedded Model
    director: {
        type: {
            name: {
                type: String,
                required: true,
            },
            phoneNo: {
                type: String,
                required: true,
            }
        }
    },
    year: {
        type: Number,
    },
    genre: [String]
})

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;