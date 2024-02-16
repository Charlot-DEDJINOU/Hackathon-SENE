import React, { useState, useEffect } from 'react'
import {FaUser , FaUserAlt} from "react-icons/fa"
import {HiLockClosed} from "react-icons/hi"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useContext} from "react"
import { UserContext } from "./ContextUser"
import styled from 'styled-components'
import imageform from '../assets/imageform.jpg'
import imageform2 from '../assets/imageform2.jpg'
import imageform3 from '../assets/imageform3.jpg'
import imageform4 from '../assets/imageform4.jpg'
import "../styles/alert.css"

const ConnexionContainer = styled.div`
  width: 100%;
  height: 680px;
  margin-top : 70px ;
  display : flex ;
  background-color: rgba(86, 85, 85, 0.188) ;
`
const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Formulaire = styled.div`
  width: 70%;
  height : 80% ;
  border-radius: 5px;
  background-color: white ;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.3);
`
const ImageContainer = styled.div`
  width: 50%;
  height: 100%; 
`
const Link = styled.i`
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.8;
    font-style: italic;
    color: rgb(0, 163, 77);
    font-weight:600;
    &:hover{
      color:black;
    }
`
const SpanIcone=styled.div`
    width: 150px;
    height: 150px;
    margin: 15px 0px;
    border-radius: 75px;
    color: white;
    background-color: rgb(0, 163, 77);
`
const Icone=styled.div`
  width : 100% ;
  height : 100% ;
  font-size:7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Seconnecter=styled.div`
display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const Span = styled.span`
   display: inline-block;
`
const Form = styled.form`
  min-height: 55%;
  width : 80% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin : 0px auto ;
`
const FormGroup=styled.div`
    width: 80%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background-color: rgb(212, 207, 207);
`
const Input =styled.input`
    width: 87%;
    height: 98%;
    border: none;
    outline: none;
    background: none;
`
const Formspan =styled.span`
    width: 12%;
    height: 98%;
    border-right: 5px solid rgb(0, 163, 77);
    display: flex;
    justify-content: center;
    align-items: center;
`
const CheckGroup =styled.div`
    width: 80%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 500;
`
const Checkgroupspan =styled.span`
text-decoration: underline;
    cursor: pointer;
    opacity: 0.8;
    font-style: italic;
    color: rgb(0, 163, 77);
    font-weight:600;
     &:hover{
      color:black;
     }
`
const ContainerSubmit=styled.input`
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

export default function Connexion() {

  const [currentImage, setCurrentImage] = useState(Images[0])
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Images.indexOf(currentImage)
      const nextIndex = (currentIndex + 1) % Images.length
      setCurrentImage(Images[nextIndex])
    }, 3000)
    return () => clearInterval(interval)
  }, [currentImage])

  const { register, handleSubmit , formState: { errors } } = useForm();

  const {toggleLogin}=useContext(UserContext)

  const Mise_a_jour = (informations,ele) => {

    if (informations.message) {
      ele.className = "alerte-danger";
      ele.innerText = (informations.message)
    } 
    else {
      ele.className = "alerte-success"
      ele.innerText = ("Connexion réussie")
      localStorage.setItem('utilisateur', JSON.stringify(informations))
      toggleLogin()
      setTimeout(() => navigate("/") , 1000)
    }
  }

  const onSubmitConnexion = data => {
    
      var ele = document.getElementById("alert");
      var button = document.getElementById("button")
      button.value="Connexion ..."

      fetch('http://192.168.1.186:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((informations) => {
          button.value="Envoyer"
          Mise_a_jour(informations,ele)
        })
        .catch((error) => alert(error.stack));
    }

  const navigate = useNavigate()

  return (
    <ConnexionContainer>
      <FormContainer>
        <Formulaire>
                <Seconnecter>
                    <SpanIcone><Icone><FaUser/></Icone></SpanIcone>
                    <p
                    style={{fontWeight: 'bold',fontFamily:'sans-serif'}}
                    >CONNECTEZ-VOUS A VOTRE COMPTE</p>
                    <Span> Nouvel utilisateur?<Link onClick={() => navigate("/Inscription") }>Inscrivez-vous-ci</Link></Span>
                </Seconnecter>
                <Form onSubmit={handleSubmit(onSubmitConnexion)}>
                    <FormGroup
                      style={{ 
                        color: errors.email && "#721c24" ,
                        backgroundColor:errors.email && "#f8d7da" ,
                        borderColor:errors.email && "#f5c6cb"
                      }}
                    >
                        <Formspan><FaUserAlt /></Formspan>
                        <Input type="email" placeholder="Email" required
                          {...register("email", { required: true,pattern: /^[A-Za-z0-9]*@gmail.com/i })} 
                        />
                    </FormGroup>
                    <FormGroup
                     style={{ 
                      color: errors.motdepasse && "#721c24" ,
                      backgroundColor:errors.motdepasse && "#f8d7da" ,
                      borderColor:errors.motdepasse && "#f5c6cb"
                    }}
                    >
                        <Formspan><HiLockClosed /></Formspan>
                        <Input type="password" placeholder="Mot de passe"
                        {...register("motdepasse", { required: true,minLength:8 })} 
                        />
                    </FormGroup>
                    <CheckGroup>
                        <div
                            style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                            <input type="checkbox" required
                            {...register("check", { required: true })} 
                            style={{
                              border: errors.check ? "1px solid #721c24" : "1px solid green" , marginRight: "5px"
                            }}
                            />
                            <span>Coche moi</span>
                        </div>
                        <Checkgroupspan onClick={() => navigate("/EnvoyerMail") }>Mot de passe oublié?</Checkgroupspan>
                    </CheckGroup>
                    <span id="alert"></span>
                    <ContainerSubmit type="submit" id="button" value="Envoyer"/>
                </Form>
        </Formulaire>
      </FormContainer>
      <ImageContainer>
        <img
          src={currentImage.src}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </ImageContainer>
    </ConnexionContainer>
  )
}
