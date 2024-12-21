const config = require("./config");
const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./routes");
const errorMiddlewares = require("./middleware/error.middlewares");

const app = express();
require("./database");

app.use(express.json());
app.use(cors());
app.use('/api', router);


const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'public', 'index.html'));
});

app.use(errorMiddlewares);

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});
