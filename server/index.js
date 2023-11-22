import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const userModel = mongoose.model('users', userSchema);


// Read
app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// Read Particular Data
app.get('/editContact/:id', (req, res) => {
    const id = req.params.id;
    userModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// Create
app.post('/addContact', (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(error => res.json(error));
})

//Update
app.put('/editContact/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id }, req.body)
        .then(users => res.json(users))
        .catch(error => res.json(error));
})

//Delete
app.delete('/deleteContact/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(error => res.json(error));
})

app.listen(PORT, () => {
    console.log(`server connected on port ${PORT}`)
})