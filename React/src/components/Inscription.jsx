import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Toast from "react-bootstrap/Toast"
import ToastContainer from 'react-bootstrap/ToastContainer';
import styled from 'styled-components'
import imageform from '../assets/imageform.jpg'
import imageform2 from '../assets/imageform2.jpg'
import imageform3 from '../assets/imageform3.jpg'
import imageform4 from '../assets/imageform4.jpg'
import "../styles/alert.css"

const InscriptionContainer = styled.div`
  width: 100%;
  height: 685px;
  margin-top:70px;
  display: flex;
  background-color: rgba(86, 85, 85, 0.188) ;
`

const FormConainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Formulaire = styled.div`
  width: 70%;
  height: 85%;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.3);
  background-color: white ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`
const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
`

const ContainerSubmit = styled.button`
  width: 80%;
  height: 35px;
  display: flex;
  border-radius:5px;
  align-items: center;
  justify-content : center ;
  font-size: 15px;
  font-weight: 500;
  border:none;
  cursor: pointer;
  color:white;
  background-color: rgb(0, 163, 77);
`
const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: rgb(212, 207, 207);
  padding-left: 7px;
`
const Form = styled.form`
  width: 80% ;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
const FormGroup = styled.div`
  width: 80% ;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const CheckGroup = styled.div`
  width: 15rem;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  font-size: 15px;
  font-weight: 500;
`
const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.8;
  font-style: italic;
  color: rgb(0, 163, 77);
  font-weight: 600;
  &:hover {
    color: black;
  }
`
const Images = [
  {
    id: 1,
    src: imageform,
  },

  {
    id: 2,
    src: imageform2,
  },
  {
    id: 3,
    src: imageform3,
  },

  {
    id: 4,
    src: imageform4,
  },
]

export default function Inscription() {
  
  const [currentImage, setCurrentImage] = useState(Images[0])
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Images.indexOf(currentImage)
      const nextIndex = (currentIndex + 1) % Images.length
      setCurrentImage(Images[nextIndex])
    }, 3000)
    return () => clearInterval(interval)
  }, [currentImage])

  const navigate = useNavigate()

  const { register, handleSubmit , formState: { errors } } = useForm();

  const [show, setShow] = useState(false);

  const Mise_a_jour = (informations , ele) => {

    if (informations.message === "Inscription réussie") {
      setShow(true) ;
      ele.className = "alerte-success";
      setTimeout(()=> navigate("/Login") , 1500)
    } 
    else
      ele.className = "alerte-danger";

    ele.innerText=(informations.message)
  }
  
  const onSubmitInscription = (data) => {

    var ele = document.getElementById("alert");

    if (data.motdepasse !== data.motdepasse2) {

      ele.className = "alerte-danger";
      ele.innerText=("Mot de passe non conforme");
    } 
    else {

      var button = document.getElementById("soumettre")
      button.innerText=("Envoie ...")
      var new_data = data ;
      new_data.adresse = null ;
      new_data.contact = null ;
      console.log(new_data)

      fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(new_data),
      })
        .then((response) => response.json())
        .then((informations) => {
          button.innerText=("Soumettre")
          Mise_a_jour(informations,ele)
        })
        .catch((error) => alert(error.stack));
    }
  };


  return (
    <InscriptionContainer>
      <FormConainer>
        <Formulaire>
          <div
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}
          >
            Créer votre compte
          </div>
          <div
          >
            Vous avez dejà un compte?<Link onClick={() => navigate("/Login")}>Connexion</Link>
          </div>
          <Form onSubmit={handleSubmit(onSubmitInscription)}>
                <FormGroup>
                    <label for="Nom">Nom</label>
                    <Input type="text" id="Nom"
                       {...register("nom", { required: true})} 
                       style={{ 
                        color: errors.nom && "#721c24" ,
                        backgroundColor:errors.nom && "#f8d7da" ,
                        borderColor:errors.nom && "#f5c6cb"
                      }} 
                    />
                </FormGroup>
                <FormGroup>
                    <label for="prenom">Prenom</label>
                    <Input type="text" id="prenom"  
                      {...register("prenom", { required: true,pattern: /^[A-Za-z]*/i })}
                      style={{ 
                        color: errors.prenom && "#721c24" ,
                        backgroundColor:errors.prenom && "#f8d7da" ,
                        borderColor:errors.prenom && "#f5c6cb"
                      }} 
                    />
                </FormGroup>
                <FormGroup>
                  <label for="Email">Email</label>
                  <Input type="email" id="Email" required
                     {...register("email", { required: true,pattern: /^[A-Za-z0-9]*@gmail.com/i })} 
                     style={{ 
                      color: errors.email && "#721c24" ,
                      backgroundColor:errors.email && "#f8d7da" ,
                      borderColor:errors.email && "#f5c6cb"
                    }}
                  />
                </FormGroup>
                <FormGroup>
                    <label for="password">Mot de passe</label>
                    <Input type="password" id="password" required minLength={8}
                      {...register("motdepasse", { required: true,minLength : 8})} 
                      style={{ 
                        color: errors.motdepasse && "#721c24" ,
                        backgroundColor:errors.motdepasse && "#f8d7da" ,
                        borderColor:errors.motdepasse && "#f5c6cb"
                      }}
                    />
                </FormGroup>
                <FormGroup >
                    <label id="confirmpassword">Confirmer Mot de passe</label>
                    <Input type="password" required
                      {...register("motdepasse2", { required: true })} 
                      style={{ 
                        color: errors.motdepasse2 && "#721c24" ,
                        backgroundColor:errors.motdepasse2 && "#f8d7da" ,
                        borderColor:errors.motdepasse2 && "#f5c6cb"
                      }}
                    />
                </FormGroup>
                <CheckGroup>
                    <input type="checkbox" required
                      {...register("check", { required: true })} 
                    />
                    <span
                      style={{
                        marginLeft: "10px"
                      }}
                    
                    >Se souvenir de moi</span>
                </CheckGroup>
                <span id="alert"></span>
                <ContainerSubmit id="soumettre">SOUMETTRE</ContainerSubmit>
          </Form>
        </Formulaire>
      </FormConainer>
      <ImageContainer>
        <img
          src={currentImage.src}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
          }}
        />
      </ImageContainer>
      <ToastContainer  position="top-end">
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation={true}>
              <Toast.Header closeButton={false}>
                  <span style={{color:"rgb(0, 163, 77)",fontWeight:"bold"}}>ECOTIC</span>
              </Toast.Header>
              <Toast.Body>Inscription réussie avec succès</Toast.Body>
          </Toast>
      </ToastContainer>
    </InscriptionContainer>
  )
}
