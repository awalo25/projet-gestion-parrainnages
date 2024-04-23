import React, { useState } from "react";
import axios from "axios";
import "./CandidatureComponent.css";
import FormCandidat from "./FormCandidat"; // Importez le composant FormCandidat

const CandidatureComponent = () => {
  const [numeroCarteElecteur, setNumeroCarteElecteur] = useState("");
  const [numeroCandidat, setNumeroCandidat] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [adresseEmail, setAdresseEmail] = useState("");
  const [numeroTelephone, setNumeroTelephone] = useState("");
  const [nomPartiPolitique, setNomPartiPolitique] = useState("");
  const [slogan, setSlogan] = useState("");
  const [photo, setPhoto] = useState("");
  const [couleursParti, setCouleursParti] = useState("");
  const [urlInformations, setUrlInformations] = useState("");
  const [candidatExistant, setCandidatExistant] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNumeroCarteElecteurChange = (event) => {
    setNumeroCarteElecteur(event.target.value);
  };

  const handleNumeroCandidatChange = (event) => {
    setNumeroCandidat(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleDateNaissanceChange = (event) => {
    setDateNaissance(event.target.value);
  };

  const handleAdresseEmailChange = (event) => {
    setAdresseEmail(event.target.value);
  };

  const handleNumeroTelephoneChange = (event) => {
    setNumeroTelephone(event.target.value);
  };

  const handleNomPartiPolitiqueChange = (event) => {
    setNomPartiPolitique(event.target.value);
  };

  const handleSloganChange = (event) => {
    setSlogan(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleCouleursPartiChange = (event) => {
    setCouleursParti(event.target.value);
  };

  const handleUrlInformationsChange = (event) => {
    setUrlInformations(event.target.value);
  };

  const handleVerificationCandidat = async () => {
    try {
      const response = await axios.get(
        `https://apex.oracle.com/pls/apex/candidat/election/candidat`,
      );
      const candidatData = response.data;
      console.log("Réponse de l'API :", candidatData); // Afficher la réponse de l'API
      if (candidatData.length > 0) {
        setCandidatExistant(true);
        setErrorMessage("");
        setNumeroCandidat(candidatData[0].numero_candidat);
        setNom(candidatData[0].nom);
        setPrenom(candidatData[0].prenom);
        setDateNaissance(candidatData[0].date_naissance);
      } else {
        setCandidatExistant(false);
        setErrorMessage("Candidat non enregistré.");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du candidat :", error); // Afficher l'erreur
      setErrorMessage("Erreur lors de la vérification du candidat.");
    }
  };

  const handleEnregistrementCandidature = async () => {
    try {
      const response = await axios.post(
        `https://apex.oracle.com/pls/apex/candidat/election/candidat`,
        {
          numero_candidat: numeroCandidat,
          nom: nom,
          prenom: prenom,
          date_naissance: dateNaissance,
          adresse_email: adresseEmail,
          numero_telephone: numeroTelephone,
          nom_parti_politique: nomPartiPolitique,
          slogan: slogan,
          photo: photo,
          couleurs_parti: couleursParti,
          url_informations: urlInformations,
        },
      );
      if (response.status === 201) {
        setErrorMessage("");
        setCandidatExistant(true);
      } else {
        setErrorMessage("Erreur lors de l'enregistrement de la candidature.");
      }
    } catch (error) {
      setErrorMessage("Erreur lors de l'enregistrement de la candidature.");
    }
  };

  return (
    <div className="form-candidat">
      <h1>Candidat</h1>
      <label htmlFor="numeroCarteElecteur">Numéro de la carte électeur</label>
      <input
        type="text"
        id="numeroCarteElecteur"
        value={numeroCarteElecteur}
        onChange={handleNumeroCarteElecteurChange}
      />
      <button onClick={handleVerificationCandidat}>Vérifier candidat</button>
      {candidatExistant ? (
        <div>
          <h2>Informations candidat</h2>
          <label htmlFor="numeroCandidat">Numéro candidat</label>
          <input
            type="text"
            id="numeroCandidat"
            value={numeroCandidat}
            onChange={handleNumeroCandidatChange}
          />
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" value={nom} onChange={handleNomChange} />
          <label htmlFor="prenom">Prénom</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={handlePrenomChange}
          />
          <label htmlFor="dateNaissance">Date de naissance</label>
          <input
            type="date"
            id="dateNaissance"
            value={dateNaissance}
            onChange={handleDateNaissanceChange}
          />
          <label htmlFor="adresseEmail">Adresse email</label>
          <input
            type="text"
            id="adresseEmail"
            value={adresseEmail}
            onChange={handleAdresseEmailChange}
          />
          <label htmlFor="numeroTelephone">Numéro de téléphone</label>
          <input
            type="text"
            id="numeroTelephone"
            value={numeroTelephone}
            onChange={handleNumeroTelephoneChange}
          />
          <h2>Informations parti politique</h2>
          <label htmlFor="nomPartiPolitique">Nom du parti politique</label>
          <input
            type="text"
            id="nomPartiPolitique"
            value={nomPartiPolitique}
            onChange={handleNomPartiPolitiqueChange}
          />
          <label htmlFor="slogan">Slogan</label>
          <input
            type="text"
            id="slogan"
            value={slogan}
            onChange={handleSloganChange}
          />
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={handlePhotoChange}
          />
          <label htmlFor="couleursParti">Couleurs du parti</label>
          <input
            type="text"
            id="couleursParti"
            value={couleursParti}
            onChange={handleCouleursPartiChange}
          />
          <label htmlFor="urlInformations">URL des informations</label>
          <input
            type="text"
            id="urlInformations"
            value={urlInformations}
            onChange={handleUrlInformationsChange}
          />
          {candidatExistant ? <h2>Candidat enregistré avec succès!</h2> : null}
          <button onClick={handleEnregistrementCandidature}>
            Enregistrer candidat
          </button>
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  );
};

export default CandidatureComponent;
