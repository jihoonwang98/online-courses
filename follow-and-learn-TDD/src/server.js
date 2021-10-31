const express = require('express');

// constants
const PORT = 8080;
const HOST = 'localhost';

// app
const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mojo:7fxOmoTEVZJ7LZn6@cluster0.xeicx.mongodb.net/prac?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    })

app.use('/api', productRoutes);


app.use(express.json());
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

