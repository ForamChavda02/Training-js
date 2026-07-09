const express = require("express");
const app = express(); 
const port = 8080;

app.use(express.json());

let recipes = [
    {
        id: 1,
        name: "pasta",
        cuisine: "Italian"
    },
    {
        id: 2,
        name: "Tacos",
        cuisine: "Mexican"
    }
];

app.get("/receips", (req, res) => {
    const cuisine  = req.query.cuisine;

    if(cuisine) {
        const filterReceips = recipes.filter(
            recipe => recipe.cuisine === cuisine
        );
        return res.json(filterReceips);
    }
    res.json(recipes);
});

app.get("/receips/:id", (req, res) => {
    const id = Number(req.params.id);

    const recipe = recipes.find(recipe => recipe.id === id);

    if(!recipe) {
        return res.status(404).json({
            message: "recipe not found"
        })
    }
    res.json(recipe);
});

app.listen(port, () => {
    console.log(`app is listenin on port: ${port}`);
});