import { useState } from "react";
import Notification from "./Notification";
import { useEffect } from "react";
import "./Notification.css"
import io from 'socket.io-client';

export default function Notifications() {
    const [notifications, setNotifications] = useState([]); 
    const id=1
    
    useEffect(() => {
      const socket = io("http://localhost:3001");
  
      socket.on("connect", () => {
        console.log("Connecté au serveur WebSocket");
        socket.emit("subscribe", 1);
      });
  
      socket.on("notification", (newNotification) => {
        setNotifications(() => [
          JSON.parse(newNotification),
          ...notifications,
        ]);
      });
  
      socket.on("error", (error) => {
        console.error("Erreur Socket.IO :", error);
      });
  
      return () => {
        socket.off("connect");
        socket.off("notification");
        socket.off("error");
        socket.disconnect();
      };
    }, [id]);
  
    return (
      <div className="allNotifications">
        {notifications.map((notification) => (
          <Notification {...notification} key={notification.id} />
        ))}
      </div>
    );
  } 