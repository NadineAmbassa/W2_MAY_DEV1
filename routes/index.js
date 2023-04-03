const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => {
    reponse.send('SVP, veuillez utiliser /api/messages pour faire appel au service Web des messages...');
});
module.exports = router;