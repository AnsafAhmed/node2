const express = require('express');
const bodyParser= require('body-parser');

const sequelize = require('./config/database');
require('./models/user.model'); // may not be required in production

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send("Node2");
})

app.post('/user', (req,res) => {
    console.log(req);
    res.send(req);
})

sequelize.authenticate().then(() => {
    sequelize.sync({alter: true}).then(() => { // db.sync not recommended for production
        app.listen(PORT, () => {
            console.log("Server listening on port ", PORT);
        });
    })
}).catch(e => {
    console.log(e);
})