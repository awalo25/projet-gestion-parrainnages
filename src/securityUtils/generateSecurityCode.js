// Fonction pour générer un code de sécurité aléatoire
const generateSecurityCode = () => {
  // Générer un code aléatoire à 4 chiffres
  const code = Math.floor(1000 + Math.random() * 9000);
  return code.toString(); // Convertir le nombre en chaîne de caractères
};
