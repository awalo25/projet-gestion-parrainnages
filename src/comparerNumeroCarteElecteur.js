import axios from "axios";

// Fonction pour comparer le numéro de carte électeur avec celui dans la base de données
async function comparerNumeroCarteElecteur(numeroCarteElecteur) {
  try {
    // Envoie une requête GET à l'API pour récupérer les données du candidat avec le numéro de carte électeur
    const response = await axios.get(
      `https://apex.oracle.com/pls/apex/candidat/election/{numeroCarteElecteur}`,
    );

    // Vérifie si la réponse est réussie et si des candidats ont été trouvés avec le numéro de carte électeur donné
    if (response.status === 200 && response.data.length > 0) {
      // Le candidat existe dans la base de données
      return true;
    } else {
      // Aucun candidat trouvé avec le numéro de carte électeur donné
      return false;
    }
  } catch (error) {
    // Gère les erreurs d'exécution
    console.error(
      "Erreur lors de la comparaison des numéros de carte électeur :",
      error,
    );
    return false;
  }
}

// Exemple d'utilisation de la fonction
const numeroCarteElecteurInput = "123456789"; // Numéro de carte électeur entré en input
comparerNumeroCarteElecteur(numeroCarteElecteurInput).then((candidatExiste) => {
  if (candidatExiste) {
    console.log("Le candidat existe dans la base de données.");
  } else {
    console.log("Aucun candidat trouvé avec ce numéro de carte électeur.");
  }
});
