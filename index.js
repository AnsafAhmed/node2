const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    return res.send("Node2");
})

app.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
})