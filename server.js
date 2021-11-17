const express = require("express");
const app = express();
const server = require("http").createServer(app);

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log(`http://localhost:3000`);
});