import React, { useState, useEffect } from "react";
import axios from "axios";

const ListeCandidats = () => {
  const [candidats, setCandidats] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Charger la liste des candidats lors du montage du composant
    chargerCandidats();
  }, []);

  const chargerCandidats = async () => {
    try {
      // Récupérer la liste des candidats depuis le backend
      const response = await axios.get("URL_DU_BACKEND/candidats");
      const data = response.data;
      setCandidats(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const afficherDetailsCandidature = (idCandidat) => {
    // Naviguer vers la page des détails de la candidature en utilisant React Router ou tout autre système de navigation
    // Vous pouvez également afficher les détails dans un composant modale
    console.log("Afficher les détails du candidat avec l'ID :", idCandidat);
  };

  return (
    <div>
      <h2>Liste des candidats enregistrés</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {candidats.map((candidat) => (
          <li key={candidat.id}>
            <p>Nom: {candidat.nom}</p>
            <p>Prénom: {candidat.prenom}</p>
            <p>Date de naissance: {candidat.dateNaissance}</p>
            {/* Ajouter d'autres détails du candidat si nécessaire */}
            <button onClick={() => afficherDetailsCandidature(candidat.id)}>
              Voir détails
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeCandidats;
