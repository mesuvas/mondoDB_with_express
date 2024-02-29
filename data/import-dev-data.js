const dotenv = require('dotenv')
const mongoose = require('mongoose')
const fs = require('fs')
const Movie = require('./../Models/movieModel.js')

dotenv.config({path: './config.env'})

//database connection
mongoose.connect(process.env.CONN_STR).then((conn) => {
    console.log('Mongodb conected success..')
}).catch((error) =>{
    console.log(process.env.CONN_STR);
    console.log('Mongodb connected error..')
})

//read movie.json
const movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'))

//delete exirsting movies formt the collection
const deleteMovies = async () =>{
    try{
        await Movie.deleteMany();
        console.log('Movies successfully deleted....')
    }catch(err){
        console.log(err)
    }
    process.exit()
}

//import movies to the mongodb
const importMovies = async () =>{
    try {
        await Movie.create(movies)
        console.log('Movies added to the database')
    }catch(err){
        console.log(err)
    }
    process.exit()
}
if(process.argv[2] === '--import'){
    importMovies()
}
else if(process.argv[2] === '--delete'){
    deleteMovies()
}

 