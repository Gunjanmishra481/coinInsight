import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
