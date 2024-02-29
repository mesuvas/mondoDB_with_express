const mongoose = require('mongoose')
const {Schema} = mongoose;

const movieSchema = new Schema({
    name:  {
        type: String, 
        required: [true,  'Name is required field'], 
        unique: true,
        trim: true
    },
    director: {
        type: [String], 
        required: [true,  'Director is required field'], 
    },
    description: {
        type: String, 
        required: [true,  'Description is required field'], 
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    releaseYear: {
        type: Date,
        required: [true,  'Description is required field']
    },
    releaseDate: {
        type: Date,
        required: [true,  'Description is required field']
    },
    duration: {type: Number},   
    ratings: {type: Number, default: 1.0 },
    genres:{
        type: [String],
        required: [true, 'Genres is required field']
    },
    actors: {
        type: [String],
        required: [true, 'Actors names are required field']
    },
    price:{
        type: Number,
        required: [true, 'Price is required field']
    },
    image:{
        type: Buffer,
        required: [true, 'Image is required field']
    }

})

const Movie = mongoose.model('Movie',movieSchema)

module.exports = Movie; 