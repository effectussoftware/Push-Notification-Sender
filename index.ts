import * as admin from "firebase-admin";

var serviceAccount = require("./key/offen-4e1da-firebase-adminsdk-n7ir8-58635f62a5.json");
// Key to access directly to firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://offen-4e1da.firebaseio.com",
});

const tokens = [
  "fM_OWcprTw-1NzT4j1r16g:APA91bEdXm870EBj92ZMSiCAcpDEZaf1LNO8S9RdzE2vkVGW33YPOwNvphNnSmqDs6wxJkr4mUzW8u9DzgRuLY7dBx8Q8QZBdzJyL15FhLb6GC00kgBi84Xpi7CJNtg-9Y_v3hOCQ21A",
];
// This can be more than one phone's token

const notification = {
  tokens,
  notification: {
    body: "Example notification message",
    title: "Offen Notification",
  },
  data: {
    id: "1",
    user_id: "10",
    event_id: "10",
    fromUserId: "50",
    fromUserPhoto:
      "https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg",
    flag: "5",
    Username: "Un nombre de usuario",
    Event: "Evento de prueba",
    confirmed: "0",
    canceled: "0",
  },
};

admin
  .messaging()
  .sendMulticast(notification)
  .then((response) => {
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });
