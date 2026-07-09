const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

let Movies = [
    {
        id: 1,
        title: "Iron man",
        watched: true
    },
    {
        id: 2,
        title: "spider man",
        watched: true
    },
    {
        id: 3,
        title: "Bhul Bhuliya",
        watched: false
    }
];

app.get("/", (req, res) => {
    res.send("Movie Playlist APIs");
});

app.get("/movies", (req, res) => {
    res.json(Movies);
});

app.post("/movies", (req, res) => {
    const { title, watched } = req.body;

    const newMovie = {
        id: Movies.length + 1,
        title,
        watched
    };
    Movies.push(newMovie);

    res.status(201).json({
        message: "new Movie added",
        newMovie
    });
});

app.patch("/movies/:id", (req, res) => {
    const id = Number(req.params.id);

    const movie = Movies.find(movie => movie.id === id);

    if(!movie) {
        return res.status(404).json({
            message: "Movie not found"
        });
    }
    if(req.body.title !== undefined) {
        movie.title = req.body.title;
    }
    if(req.body.watched !== undefined) {
        movie.watched = req.body.watched;
    }
    res.json({
        message: "Movie updated successfuly",
        movie
    })
});

app.delete("/movies/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = Movies.findIndex(movie => movie.id === id);

    if(index === -1) {
        return res.status(404).json({
            message: "Movie not Found"
        });
    }
    Movies.splice(index, 1);

    res.json({
        message: "Movie Deleted"
    });
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});