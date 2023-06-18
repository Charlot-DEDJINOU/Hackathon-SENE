const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());

app.get('/notification', (req, res) => {
  const notificationData = req.query.data;
  console.log(notificationData);
  
  io.emit("notification", notificationData);
  
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("Nouvelle connexion : ", socket.id);

  socket.on("subscribe", (userId) => {
    console.log("Abonnement de l'utilisateur :", userId);

  });

  socket.on("disconnect", () => {
    console.log("Déconnexion : ", socket.id);
  });
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.listen(3001, () => {
  console.log(`Serveur Socket.IO en cours d'exécution sur le port 3001`);
});