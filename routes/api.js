/**
 * Auteur: Nadine Ambassa
 * Date: 3 mars 2023
 * Description: modèle Mongoose pour accéder à la collection messages
 */


const express = require('express');
const router = express.Router();
const Messages = require('../modeles/Messages');
const mongoose = require("mongoose");

//route pour obtenir tous  les messages
router.get("/", (requete, reponse) => {
    Messages.find({}, null, {limit:250}).exec()
    .then(messages => reponse.json(messages))
    .catch((err) => console.log(err))
     })

//route pour obtenir les messages par l'id
router.get("/:idMessages", (requete, reponse) => {
    Messages.find({_id:requete.params.idMessages },null, {limit:250}).exec()
      .then(messages => reponse.json(messages))
      .catch((err) => console.log(err))
  }) 


//route pour obtenir les messages par la description 
router.get("/description/:descMessages", (requete, reponse) => {
    Messages.find({description:RegExp(requete.params.descMessages, "i") },null, {limit:250}).exec()
      .then(messages => reponse.json(messages))
      .catch((err) => console.log(err))
  })
// route pour obtenir les messages par le titre
router.get("/titre/:titreMessages", (requete, reponse) => {
    Messages.find({titre:RegExp(requete.params.titreMessages, "i") },null, {limit:250}).exec()
      .then(messages => reponse.json(messages))
      .catch((err) => console.log(err))
  })


// route pour obtenir les messages par l'auteur
router.get("/auteur/:auteurMessages", (requete, reponse) => {
    Messages.find({auteur:RegExp(requete.params.auteurMessages, "i") },null, {limit:250}).exec()
      .then(messages => reponse.json(messages))
      .catch((err) => console.log(err))
  })

// route pour supprimer le message dont l'identifiant est _id
router.delete("/:_idMessages", (requete, reponse)=>{
    Messages.findOneAndDelete({_id: requete.params._idMessages}).exec()
      .then((messages) => {
        reponse.json(messages);
      })
      .catch((err) => 
        console.log(err)
      );
  });

// route pour modifier le message dont l'identifiant est _id
router.put('/:_idMessages', (requete, reponse) => {
  const nouveauMessages = requete.body;
  Messages.findOneAndUpdate({_id: requete.params._idMessages},
    
    nouveauMessages,
    { new: true }// options nouveau livre après modification
  ).exec()
    .then((messagesModifie) => { reponse.json(messagesModifie)
    })
    .catch((err) => { console.log(err);
    });
});


// route pour ajouter un  message 
router.post("/", (requete, reponse) => {
    let message = requete.body;
    message._id = new mongoose.Types.ObjectId();
    Messages.create(message)
      .then(resultat => reponse.json(resultat))
      .catch(err => console.log(err));
  });


module.exports = router;