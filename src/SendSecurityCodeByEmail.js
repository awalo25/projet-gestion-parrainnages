const nodemailer = require("nodemailer");

// Fonction pour envoyer le code de sécurité par email
const sendSecurityCodeByEmail = async (email, code) => {
  // Créer un transporteur SMTP réutilisable à l'aide de nodemailer
  let transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Adresse SMTP de votre fournisseur de messagerie
    port: 587, // Port SMTP
    secure: false, // true pour le port 465 (SSL), false pour les autres ports
    auth: {
      user: "votre-email@example.com", // Votre adresse email
      pass: "votre-mot-de-passe", // Votre mot de passe
    },
  });

  // Définir les options de l'email
  let mailOptions = {
    from: "votre-email@example.com", // Adresse email de l'expéditeur
    to: email, // Adresse email du destinataire
    subject: "Code de sécurité", // Sujet de l'email
    text: `Votre code de sécurité est : ${code}`, // Corps de l'email
  };

  // Envoyer l'email
  let info = await transporter.sendMail(mailOptions);

  console.log("Message envoyé: %s", info.messageId);
};
