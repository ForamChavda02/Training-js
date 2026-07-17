const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const posts = [
    { id: 1, username: "rockstar", content: "hii, i am rockstar and i make rapps and sing rapp songs"},
    { id: 2, username: "alonewalker", content: "hii i am alonewalker sing songs like alone pt2"}
];

app.get("/posts", (req, res) => {
    res.json({ posts });
});

app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if(!post) {
        return res.status(404).json({ message: "post not found"});
    }
    res.json({post});
});

app.post("/posts", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        username: req.body.username,
        content: req.body.content
    };

    posts.push(newPost);
    res.send({newPost});
});

app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if(!post) {
        return res.status(404).json({ message: "post not found" });
    }

    const updatePost = {
        username: req.body.username,
        content: req.body.content
    };

    res.json({updatePost});
});

app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    
    if(index === -1) {
        return res.status(404).json({ message: "post not found" });
    }

    posts.splice(index, 1);
    res.json({ message: "post deleted" });
});

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});