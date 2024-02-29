const Movie = require('./../Models/movieModel.js');
 

exports.getAllMovies =async(req, res) => {
    console.log('i am called...')
    try{
        //  const movies =await Movie.find({duration: +req.query.duration})
        const movies =await Movie.find()

        res.status(200).json({
            status: 'success',
            length: movies.length,
            data:{
                movies
            }
        })
    }catch(err){
        res.status(404).json({
            stats: 'fail',
            message: err.message
        })
    }
}

exports.getMovie =async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);

        res.status(200).json({
            status:'succes',
            data: {
                movie
            }
        })
    } catch(err){
        res.status(404).json({
            status:'fail',
            message: err.message
        })
    }
}

exports.updateMovie = async (req, res) => {
    try{
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        res.status(200).json({
            status: 'success',
            data:{
                movie: updateMovie
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
 
}

exports.addMovie = async(req, res) => { 
     try{
        const movie = await Movie.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {movie}
        })
     }catch(err){"Cannot access 'movie' before initialization"
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
     }
}

exports.deleteMovie = async(req,res)=>{
    try{
        const deleteMovie = await Movie.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data:{
               movie: null
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message: err.message
        })
    }
 }
