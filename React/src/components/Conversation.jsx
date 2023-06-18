import React, { useState ,useEffect, useContext } from "react";
import "../styles/conversation.css";
import Message from "./Message";
import Chat from "./Chat";
import { UserContext } from "./ContextUser";
import { useParams } from "react-router-dom";

export default function Conversation() {

  const id_utilisateur = JSON.parse(localStorage.getItem("utilisateur")).id

  const {discussion} = useContext(UserContext)

  const {id} = useParams()

  useEffect(()=> {
    fetch("http://localhost/projets/api/message/conversation.php?data=" + id_utilisateur)
        .then((response) => response.json())
        .then((conversation) => {
          if(conversation.message)
            setAllconversation([])
          else
            setAllconversation(conversation["conversations"])
        })
        .catch((error) => alert(error.stack));
    } , [id_utilisateur , discussion])

  const [Allconversation, setAllconversation] = useState([])

  const [searchText, setSearchText] = useState("");

  const filterData = Allconversation.filter(item => 
      item.nom_utilisateur.toLowerCase().includes(searchText.toLowerCase())
    ||item.prenom_utilisateur.toLowerCase().includes(searchText.toLowerCase())
    ||item.last_message.toLowerCase().includes(searchText.toLowerCase())
  );

  const [chat , setchat] = useState({
    "id_utilisateur" : id_utilisateur ,
    "id_ami" : parseInt(id)
  })

  const AllMessage = filterData.map(item => {
    return(
     <div onClick={() => handlechat(item.id)} className={item.id === chat.id_ami ? "message_simple blue" : "message_simple"}>
        <Message {...item} />
     </div>
    )
  })

  const handlechat = (id) =>{
    setchat({
      "id_utilisateur" : id_utilisateur ,
      "id_ami" : parseInt(id)
    })
  }
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <section className="charlot">
        <div className="Conversation-body">
            <section className="Boite-Message">
                <input type="text" placeholder="Recherche..." onChange={handleSearchChange} className="searchConversation"/>
                <div className="All-messages">{AllMessage}</div>
            </section>
        </div>
        {chat.id_ami !== 0  ? <Chat {...chat} /> : <div className="start_discussion">Selectionner un ami ou commencer une discussion</div> }
    </section>
  );
}
