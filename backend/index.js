const express = require('express');
const mongoose = require('mongoose');

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


const app = express();


const mongoURL = "mongodb+srv://sankharay91:sankha@cluster0.762qehr.mongodb.net/shopping_site?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Mongodb connection error'));

db.once('open',() => {
    console.log("Connetino to DB Sucessfully");
});

app.use(express.json());
app.use(productRouter);
app.use(userRouter);


app.listen(4000,'0.0.0.0',() => {
    console.log('Server started at port 4000 ');
});

