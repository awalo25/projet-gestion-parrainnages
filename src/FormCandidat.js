import React, { useState } from "react";

const FormCandidat = ({
  handleNomChange,
  handlePrenomChange,
  handleDateNaissanceChange,
  handleAdresseEmailChange,
  handleNumeroTelephoneChange,
  handleNomPartiPolitiqueChange,
  handleSloganChange,
  handlePhotoChange,
  handleCouleursPartiChange,
  handleUrlInformationsChange,
  handleEnregistrementCandidat,
}) => {
  return (
    <form>
      <label>
        Nom :
        <input type="text" name="nom" onChange={handleNomChange} />
      </label>
      <label>
        Prénom :
        <input type="text" name="prenom" onChange={handlePrenomChange} />
      </label>
      <label>
        Date de naissance :
        <input
          type="date"
          name="dateNaissance"
          onChange={handleDateNaissanceChange}
        />
      </label>
      <label>
        Adresse email :
        <input
          type="email"
          name="adresseEmail"
          onChange={handleAdresseEmailChange}
        />
      </label>
      <label>
        Numéro de téléphone :
        <input
          type="tel"
          name="numeroTelephone"
          onChange={handleNumeroTelephoneChange}
        />
      </label>
      <label>
        Nom du parti politique :
        <input
          type="text"
          name="nomPartiPolitique"
          onChange={handleNomPartiPolitiqueChange}
        />
      </label>
      <label>
        Slogan :
        <input type="text" name="slogan" onChange={handleSloganChange} />
      </label>
      <label>
        Photo :
        <input type="file" name="photo" onChange={handlePhotoChange} />
      </label>
      <label>
        Couleurs du parti :
        <input
          type="text"
          name="couleursParti"
          onChange={handleCouleursPartiChange}
        />
      </label>
      <label>
        URL des informations :
        <input
          type="url"
          name="urlInformations"
          onChange={handleUrlInformationsChange}
        />
      </label>
      <button type="button" onClick={handleEnregistrementCandidat}>
        Enregistrer
      </button>
    </form>
  );
};

export default FormCandidat;
