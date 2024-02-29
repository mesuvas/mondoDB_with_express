const fs = require('fs');
const express = require('express');
const app = express();
const movies = require('./data/movies.json'); // Assuming you have a file containing movie data

// PATCH /api/v1/movies/:id
app.patch('/api/v1/movies/:id', (req, res) => {
    const id = parseInt(req.params.id); // Convert id to integer
    const movieToUpdate = movies.find(movie => movie.id === id);

    // Update movie object with request body
    Object.assign(movieToUpdate, req.body);

    // Update the movie in the movies array
    const movieIndex = movies.findIndex(movie => movie.id === id);
    movies[movieIndex] = movieToUpdate;

    // Write updated movies array to file
    fs.writeFile('./data/movies.json', JSON.stringify(movies, null, 2), err => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
                message: "Error updating movie data."
            });
        }

        res.status(200).json({
            status: "Success",
            message: "Movie updated successfully",
            data: {
                movie: movieToUpdate
            }
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
