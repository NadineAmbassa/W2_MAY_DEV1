const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://ewnadok1:Gabrielle2014@cluster0.yptx9vi.mongodb.net/services_DEV1');

app.use(express.json());

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('erreur de BD:', err);
});
db.once('open', () => {
    console.log('Connexion à la BD OK!!!');
});
app.use('/', require('./routes/index'));
app.use('/api/messages', require('./routes/api'));


app.listen(8000);

console.log('Service Web fonctionnel sur port 8000');