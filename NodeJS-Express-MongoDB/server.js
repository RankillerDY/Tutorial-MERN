const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models/index.js')
const getTutorialModel = require('./app/models/tutorial.model.js');

const app = express();
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Succesful connect to the database');
    })
    .catch((err) => {
        console.log('Cannot connect to database ', err);
        process.exit()
    })

// async function getList() {
//     const list = await getTutorialModel().find()
//     console.log(list);
// }



var corsOption = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOption))

//parse the content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to RankillerDY application." });
});

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});