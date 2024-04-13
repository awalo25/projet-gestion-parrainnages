Projet : Gestion des Parrainages de Candidature d'Élections Présidentielles pour le Sénégal

Dans le cadre de la modernisation des procédures administratives relatives aux élections au Sénégal, ce projet vise à numériser le processus de gestion des parrainages, une étape cruciale et fastidieuse. Actuellement réalisée à l'aide de formulaires physiques, la gestion des parrainages sera désormais effectuée de manière électronique, facilitant ainsi le processus pour toutes les parties impliquées.

Le projet se divise en plusieurs phases clés :

1.Chargement de la liste des électeurs : .Importation du fichier électoral au format CSV via une interface web sécurisée. .Contrôle de l'intégrité et du format du fichier électoral à l'aide de fonctions PLSQL. .Validation du fichier pour l'ajouter à une table persistante.

2.Saisie de la liste des candidats : .Interface web permettant la saisie et la vérification des informations des candidats sollicitant un parrainage. .Enregistrement des informations complètes du candidat avec génération d'un code de sécurité pour confirmation.

3.Ouverture de la période de parrainage : .Enregistrement des dates de début et de fin des parrainages via une interface web simple. .Contrôle de la cohérence des dates et activation automatique des fonctionnalités en fonction des dates enregistrées.

4.Enregistrement du profil du parrain : .Création d'un compte en ligne pour chaque électeur souhaitant parrainer un candidat, avec vérification des informations et envoi d'un code d'authentification. .Enregistrement d'un parrainage : .Processus d'enregistrement du parrainage en ligne par chaque électeur vérifié, incluant la sélection du candidat à parrainer et la vérification à deux facteurs.

5.Suivi des parrainages : .Interface web dédiée aux candidats pour suivre quotidiennement l'évolution de leurs parrainages, avec accès sécurisé via code d'authentification.

Voici la liste des differentes fonctionnalites a implementer.

INSTALLATION

Clonez ce dépôt de projet sur votre machine locale avec la commande suivante :

git clone https://github.com/annemariediouf/gestion_des_parrainages.git

AUTRICES

.annemariediouf

.awalo25
