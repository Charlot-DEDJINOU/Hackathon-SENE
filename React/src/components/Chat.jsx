import React, { useState , useEffect, useContext } from "react";
import { FaPaperPlane, FaUser} from "react-icons/fa";
import { useForm } from "react-hook-form";
import "../styles/chat.css";
import ModelMessage from "./ModelMessage.js";
import { UserContext } from "./ContextUser";
import { FaFileImage } from "react-icons/fa";
import Modal from "react-bootstrap/Modal"
import styled from "styled-components";

const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`
const Span=styled.span`
padding : 5px 8px ;
background-color: rgb(0,163,77) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
    cursor:pointer;
}
`

function Chat(props) {

  const data = JSON.stringify({
    "id_utilisateur" : props.id_utilisateur ,
    "id_ami" : props.id_ami
  })

  const {togglediscussion , showimage , toggleimage} = useContext(UserContext)

  const [number , setnumber] = useState(0)

    useEffect(() => {
      fetch("http://localhost/projets/api/message/chat.php?data=" + data)
      .then((response) => response.json())
      .then((message) => {
        setMessage(message)
      })
      .catch((error) => console.log(error)); 
    }, [data , number])

    const [message , setMessage] = useState({
        "messages" : [] ,
        "statut" : 0 ,
        "nom_utilisateur" : "" ,
        "prenom_utilisateur" : ""
    })

  const Convers = message.messages.map((item) => {
    return <ModelMessage {...item} />;
  });

  const { register, handleSubmit , formState: { errors } } = useForm();

  const onSentmessage = message => {
      var messages = {
        ...JSON.parse(data) ,
        "message" : message.message ,
        "type" : "texte"
      }

      messages = JSON.stringify(messages)

      fetch("http://localhost/projets/api/message/create.php?data=" + messages)
        .then((response) => response.json())
        .then((reponse) => {
          document.getElementsByClassName("input-field")[0].value=""
          togglediscussion()
          setnumber(number+1)
        })
        .catch((error) => alert(error)); 
        
      charge()
  }

  const submitfile = () => {

    handleCloseCart()

    var file = document.getElementById("file")
    file = file.files[0]

    if(file !== undefined)
    {
      var messages = {
        ...JSON.parse(data) ,
        "message" : file.name ,
        "type" : "image"
      }

      const formData = new FormData();
      formData.append('image', file);
  
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost/projets/api/upload.php');
      xhr.send(formData) ;

      messages = JSON.stringify(messages)

      fetch("http://localhost/projets/api/message/create.php?data=" + messages)
        .then((response) => response.json())
        .then((reponse) => {
          togglediscussion()
          setnumber(number+1)
        })
        .catch((error) => alert(error)); 
    }

    charge()
  }

  const [showCart,SetShowingCart]=useState(false)
    
  const handleCloseCart = () => SetShowingCart(false);
  const handleShowCart = () => SetShowingCart(true);

  function charge()
  {
    var myDiv = document.getElementsByClassName('containere')[0];
    myDiv.scrollTop = myDiv.scrollHeight
  }

  return (
    <div className="Chat-body" onLoad={charge}>
        <div className="wrapper">
            <section className="chat-area">
                <header>
                    <div className="content">
                        <i className="icon"><FaUser /></i>
                        <div className="nom_prenom">{message.nom_utilisateur} {message.prenom_utilisateur}</div>
                        <div className="statut-enligne"> {message.statut === 1 ? "En ligne" : "Pas en ligne"} <span className={message.statut === 1 ? "vert" : "noir"}></span></div>
                    </div>
                </header>
                <div className="chat-box">
                    {showimage[0] === false && <div className="containere">{Convers}</div>}
                    {showimage[0] === true && <img src={showimage[1]} alt="image" className="containere-image" onClick={() => toggleimage("")}/> }
                </div>
                <form className="typing-area" onSubmit={handleSubmit(onSentmessage)}>
                    <div className="icone-file" onClick={handleShowCart}>
                        <FaFileImage className="icone"/>
                    </div>
                    <textarea type="text" className="input-field" placeholder="Ecrire votre message ici..."
                       {...register("message", { required: true})} 
                       style={{ 
                        color: errors.message && "#721c24" ,
                        backgroundColor:errors.message && "#f8d7da" ,
                        borderColor:errors.message && "#f5c6cb"
                      }}
                    ></textarea>
                    <button ><i><FaPaperPlane /></i></button>
                </form>
            </section>
        </div>
        <Modal show={showCart} backdrop="static" size="sm" centered>
            <Modal.Body>
                <input type="file" style={{marginBottom : "10px"}} id="file"/>
                <div style={{display :"flex" , justifyContent : "space-between"}}>
                    <Span style={{backgroundColor:"rgba(0,0,0,0.7)",marginRight:"15px"}} onClick={handleCloseCart}> Retour </Span>
                    <Button onClick={submitfile} style={{backgroundColor:"rgb(0, 163, 77)"}}>Envoyer</Button>
                </div>
            </Modal.Body>
        </Modal> 
    </div>
  );
}

export default Chat;
