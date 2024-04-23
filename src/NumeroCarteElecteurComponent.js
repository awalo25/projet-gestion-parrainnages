import React, { useState } from "react";
import axios from "axios";

const NumeroCarteElecteurComponent = ({ onCandidatSelected, onError }) => {
  const [numeroCarteElecteur, setNumeroCarteElecteur] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `URL_DU_BACKEND/candidat/${numeroCarteElecteur}`,
      );
      const candidatData = response.data;
      if (!candidatData) {
        setErrorMessage(
          "Le candidat considéré n’est pas présent dans le fichier électoral.",
        );
      } else {
        onCandidatSelected(candidatData);
      }
    } catch (error) {
      onError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={numeroCarteElecteur}
          onChange={(e) => setNumeroCarteElecteur(e.target.value)}
          placeholder="Numéro de carte d'électeur"
        />
        <button type="submit">Rechercher</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default NumeroCarteElecteurComponent;
