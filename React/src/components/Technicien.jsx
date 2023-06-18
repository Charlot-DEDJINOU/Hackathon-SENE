import React from "react";
import '../styles/TrouverTechnicien.css';
import {BsFillFlagFill, BsChatFill, BsStarFill } from "react-icons/bs";
import photostandard from '../assets/technicien.jpg';
import "../styles/TrouverTechnicien.css";
import { useNavigate } from "react-router-dom";
import premium from "../assets/Premium.jpg"

export default function Technicien(props)
{

  const navigate = useNavigate()

  const newchat =(id_reparateur) =>{

    const id_utilisateur = JSON.parse(localStorage.getItem("utilisateur")).id

    var info ={
      "id_utilisateur" : id_utilisateur ,
      "id_ami" : id_reparateur ,
    }

    info = JSON.stringify(info) 

    fetch("http://localhost/projets/api/message/verify_discussion.php?data=" + info)
        .then((response) => response.json())
        .then((conversation) => {
          navigate("/conversation/"+id_reparateur)
        })
        .catch((error) => alert(error.stack));
  }

   const photo = "http://localhost/projets/images/"+props.image
    return(
        <div>
              <section className="technicien">
              <div className="entete-technicien" onClick={()=> navigate("/ProfilReparateur/"+props.id_utilisateur)}>
                <div className="info-photo-technicien">
                    <div>
                        <img src={props.image === undefined || props.image === "icone" ? photostandard : photo} alt='Technicien' className="photo-technicien"></img>
                    </div>
                    <div className="info-technicien">
                        <span className="nom-technicien">{props.nom_utilisateur+" "+props.prenom_utilisateur}</span><br/>
                        <span className="metier-technicien" style={{fontSize:"15px"}}>{props.metier}</span><br/>
                        <span className="experience-technicien">{props.annee_experience} ans d'expérience</span><br/>
                        <span className="ville-technicien">{props.ville} </span>
                    </div>
                </div>
                <div className="credits">
                  {props.premium === true && <img src={premium}  alt='premium' className="premium"/>}
                    <div className="nombre-credit">
                      <div className="etoile"><BsStarFill className="logo-etoile"/></div>
                      <span>{props.etoile} </span>
                    </div>
                    
                </div>
              </div>
              <div className="description-technicien">
                {props.description}
              </div>
              <div className="footer-technicien">
                <div className="projets"><BsFillFlagFill/> {props.nombre_projet} projets realisés</div>
                <div className="contacter" onClick={() => newchat(props.id_utilisateur)}>Contacter   <BsChatFill/></div>
              </div>
            </section>
          </div>  
    )
}