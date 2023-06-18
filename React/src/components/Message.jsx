import React from "react";
import { FaUser} from "react-icons/fa";
import "../styles/Message.css"


export default function Message(props) {

  var heure = props.date_heure.split(" ")[1].split(":")
  heure = heure[0]+":"+heure[1]
  
  return (
    <section className="composant-message">
        <div className="icone-user">
          <FaUser className="icone"/>
        </div>
        <div className={props.color_black === true ? "Middle-conversation black" : "Middle-conversation"}>
            <div className="Nom-destinataire">{props.nom_utilisateur} {props.prenom_utilisateur}</div>
            <div className="apercu-message">{props.last_message.length > 46 ? props.last_message.slice(0, 46)+"..." : props.last_message}</div>
        </div>
        <div className="heure_online">
            <span className={props.statut === 1 ? "vert" : "noir"}></span>
            <span>{heure}</span>
        </div>
    </section>
  );
}
