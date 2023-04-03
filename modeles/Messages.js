/**
 * Auteur: Nadine Ambassa
 * Date: 3 mars 2023
 * Description: modèle Mongoose pour accéder à la collection messages
 */
const mongoose = require('mongoose');

// schéma de données pour la collection messages
let schemaMessages = new mongoose.Schema({
    _id: {
        type: String, 
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    auteur: { 
        type: String, 
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    date: {
        type: Date, 
        required: true
    },
    langue: { 
        type: String,   
        required: true 
    },
    commentaires:  [{
        commentaire:{type:Object},
        auteur:{ type: Object},
        date:{type:Object},
}]
});

let Messages = module.exports = mongoose.model('messages', schemaMessages );

