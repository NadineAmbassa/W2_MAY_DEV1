# Auteur: Nadine Ambassa
# Date: 03 avril 2023
Description du projet....
Ce projet  est en fait un programme qui démarre un serveur Web afin de réaliser un API de type REST pour accéder aux données des messages (décrit plus haut) se trouvant dans Atlas. Votre programme doit utiliser le fichier index.js pour se connecter à la base de données Atlas (voir section I ci-dessus) et activer les routes nécessaires afin de servir les URL suivants (ces routes doivent être définies dans un fichier .js se trouvant dans le répertoire « ./routes »):
-	GET « /api/messages » pour récupérer tous les messages de la BD (limite à 250 messages)
-	GET « /api/messages/:id » pour récupérer le message dont l’identifiant est :id
-	GET « /api/messages/description/:texte » pour récupérer tous les messages de la BD (limite à 250 messages) dont la description contient le :texte mentionné (messages triés par date décroissante)
-	GET « /api/messages/titre/:texte » pour récupérer tous les messages de la BD (limite à 250 messages) dont le titre contient le :texte mentionné (messages triés par date décroissante)
-	GET « /api/messages/auteur/:texte » pour récupérer tous les messages de la BD (limite à 250 messages) dont l`auteur contient le :texte mentionné (messages triés par date décroissante)
-	DELETE « /api/messages/:id » pour supprimer le message dont l’identifiant est :id
-	POST « /api/messages/ » pour ajouter le message (le JSON du message contient le champ _id)
-	PUT « /api/messages/:id » pour modifier le message
De plus, votre programme doit définir un schéma de données à l’intérieur d’un fichier message.js se trouvant dans le répertoire « ./modeles ».
 
