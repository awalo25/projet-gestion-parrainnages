const accountSid = "votre-account-sid";
const authToken = "votre-auth-token";
const client = require("twilio")(accountSid, authToken);

// Fonction pour envoyer le code de sécurité par SMS
const sendSecurityCodeSMS = async (telephone, code) => {
  try {
    const message = await client.messages.create({
      body: `Votre code de sécurité est : ${code}`,
      from: "votre-numero-twilio",
      to: telephone,
    });

    console.log("Message SID: ", message.sid);
  } catch (error) {
    console.error("Erreur lors de l'envoi du SMS: ", error);
  }
};
