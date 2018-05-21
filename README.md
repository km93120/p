# Ce code prend pour base le divinity.js qui permet de fournir à sa ville 10% de la gold et de du corn que celle ci possede
# De plus, la ville possede 5% de chance de se faire benir par son dieu et de recevoir alors 100 fois ses ressources actuelles
# Enfin, elle possede egalement 1% de chance de se voir provoquer un game over, tous cela à chaque intervalle de temps
#
# En accord avec ces regles, nous avons crée un fichier citi.js (sans y car il y avait deja un fichier city existant dans le code)
# Celui ci implemente les decisions du dieu pour les ressources de la cité dans le init()
# De plus, il contient des fonctions permettant notamment d'envoyer un marchand à l'etranger 
# Celui-ci retire une certaine quantité d'argent de la ville et possede une chance sur deux de rapporter plus d'argent, une sur 10 de tout perdre
# Le joueur peut également choisir de lancer un raid, il a alors une chance sur deux de perdre des hommes (ses unités peuvent perdre la moitié de leurs hommes, ou bien disparaitre completement)
# De plus, une valeur aleatoire est crée, representant la defense de la ville, si l'armée envoyé est plus puissante, alors elle peut piller la ville, et rapporte des golds
# Enfin, le joueur peut recruter des hommes en donnant de l'argent, si cette quantité depasse une valeur aleatoire representant l'ivrognerie des habitants de la ville, alors, il recrute une unité
