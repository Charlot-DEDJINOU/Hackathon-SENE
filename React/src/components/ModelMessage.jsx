import React from "react";
import "../styles/ModelMessage.css";
import { FaUser } from "react-icons/fa";
import { UserContext } from "./ContextUser";
import { useContext } from "react";

export default function ModelMessage(props) {

  const id_utilisateur = JSON.parse(localStorage.getItem("utilisateur")).id
  const message = "vos messages sont chiffrés de bout en bout pour garantir votre confidentialité. Cela signifie que seules les personnes avec qui vous communiquez peuvent voir vos messages et personne d'autre, pas même WhatsApp. Nous prenons la confidentialité de vos messages très au sérieux et nous travaillons en permanence pour garantir la sécurité de vos conversations"
  
  const photo = "http://localhost/projets/images/"+props.message

  const {toggleimage} = useContext(UserContext)

  if(props.message.indexOf(message) !== -1 )
  {
    return (
      <div className="chiffrement">
          {props.message}
      </div>
    )
  }
  else if (props.type === "image")
  {
    return(
      <div className="ModelImage">
          {props.id_destinateur === id_utilisateur && <img title={props.message} src={photo} alt="message" style={{alignSelf : "flex-end"}} onClick={() => toggleimage(photo)}/>}
          {props.id_destinateur !== id_utilisateur && <img title={props.message} src={photo} alt="message" onClick={() => toggleimage(photo)}/>}
      </div>
    )
  }
  return(
    <section className="Modelmessage">
        {props.id_destinateur === id_utilisateur && (
          <div className="model outgoing">
              <div>{props.message}</div>
          </div>
        )}
        {props.id_destinateur !== id_utilisateur && (
          <div className="model incoming">
            <div>{props.message}</div>
            <i><FaUser /></i>
          </div>
        )}
    </section>
  )
}
