import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import image1 from '../assets/image1.jpg'
import nature from '../assets/nature.jpg'
import aboutimage from '../assets/aboutimage.jpg'
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
const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: rgb(212, 207, 207);
    padding-left: 5px;
`
const Select = styled.select`
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
  width: 80%;
  display: flex;
  font-size: 12px;
  font-weight: 500;
`
const FormGroupT = styled.div`
  width: 80% ;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom : 15px ;
`

const Images = [
  {
    id: 1,
    src: image1,
  },

  {
    id: 2,
    src: nature,
  },
  {
    id: 3,
    src: aboutimage,
  },

  {
    id: 4,
    src: image1,
  },
]

export default function EnregistrerDEEE() {
  
  const [currentImage, setCurrentImage] = useState(Images[0])
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Images.indexOf(currentImage)
      const nextIndex = (currentIndex + 1) % Images.length
      setCurrentImage(Images[nextIndex])
    }, 3000)
    return () => clearInterval(interval)
  }, [currentImage])

  useEffect(()=> {
    fetch("http://localhost/projets/api/ville/villes.php")
        .then((response) => response.json())
        .then((villes) => {
          setvilles(villes["villes"])
          setAllvilles(villes["villes"])
        })
        .catch((error) => alert(error.stack));
    } , [])

  useEffect(()=> {
    fetch("http://localhost/projets/api/quartier/quartiers.php")
        .then((response) => response.json())
        .then((quartiers) => {
          setquartiers(quartiers["quartiers"])
          setAllquartiers(quartiers["quartiers"])
        })
        .catch((error) => alert(error.stack));
    } , [])

  const [Villes , setvilles] = useState([])

  const [Quartiers,setquartiers] = useState([])

  const [Allvilles , setAllvilles] = useState([])

  const [Allquartiers,setAllquartiers] = useState([])
    
  const Quantite = ["1kg-5kg", "6kg-10kg", "11kg-15kg", ">=16kg"]

  const search_quartier = () => {
   
   if(document.getElementById("quartier").value === "")
      {
        setvilles(Allvilles)
        setquartiers(Allquartiers)
      }
   else
      {
        const quartier = JSON.parse(document.getElementById("quartier").value).id_ville
        setvilles(Allvilles.filter(item => quartier.indexOf(item.id) !== -1))
      }
  }

   const search_ville = () => {
    
    if(document.getElementById("ville").value === "")
       {
        setquartiers(Allquartiers)
        setvilles(Allvilles)
       }
    else
       {
        const id_ville = JSON.parse(document.getElementById("ville").value).id
        setquartiers(Allquartiers.filter(item => item.id_ville.indexOf(id_ville) !== -1))
       }
  }

  const { register, handleSubmit , formState: { errors } } = useForm();

  const [information , setinformation] = useState(null)

  const navigate = useNavigate()

  const onSubmitInsription = data => {
          data.ville = JSON.parse(data.ville).id
          data.quartier = JSON.parse(data.quartier).id
          setinformation(data)
      }

  const onSubmitdetail = data =>{

    var new_data = information
    new_data.description = data.description

    var ele = document.getElementById("alert")
    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"))

    if(utilisateur !== null)
    {
      const id = utilisateur.id
      new_data.id_utilisateur = id
    }

    new_data = JSON.stringify(new_data)

    fetch("http://localhost/projets/api/enregistrement_deees/create.php?data=" + new_data)
        .then((response) => response.json())
        .then((informations) => {
          Mise_a_jour(informations,ele)
        })
        .catch((error) => alert(error));
  }

  const Mise_a_jour = (messages,ele) => {

    if (messages.message !== "Enregistrement réussie avec succès") 
      ele.className = "alerte-danger";
    else {
      ele.className = "alerte-success"
      setTimeout(() => navigate("/") , 2000)
    }
    ele.innerText = (messages.message)
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
  const formulaire = () => {
    return(
      <Form onSubmit={handleSubmit(onSubmitInsription)}>
            <FormGroup>
                <label for="ville">Ville</label>
                <Select type="text" id="ville"
                  {...register("ville", { required: true , onChange: search_ville})}
                  style={{ 
                    color: errors.ville && "#721c24" ,
                    backgroundColor:errors.ville && "#f8d7da" ,
                    borderColor:errors.ville && "#f5c6cb"
                  }} 
                >
                  <option id="0" value="">Choisissez une ville</option>
                  { Villes.map((option) => ( <option key={option.id} value={JSON.stringify(option)}>{Capitalize(option.nom_ville)}</option> ))}
                </Select>
            </FormGroup>
            <FormGroup>
                <label for="quartier">Quartier</label>
                <Select type="text" id="quartier"
                   {...register("quartier", { required: true , onChange: search_quartier })} 
                   style={{ 
                    color: errors.quartier && "#721c24" ,
                    backgroundColor:errors.quartier && "#f8d7da" ,
                    borderColor:errors.quartier && "#f5c6cb"
                  }} 
                >
                   <option id="0" value="">Choisissez un quartier</option>
                  { Quartiers.map((option) => ( <option key={option.id} value={JSON.stringify(option)}>{Capitalize(option.nom_quartier)}</option> ))}
                </Select>
            </FormGroup>
            <FormGroup>
                <label for="quantite">Quantité</label>
                <Select type="number" id="quantite" 
                  {...register("quantite_livrer", { required: true})} 
                  style={{ 
                    color: errors.quantite_livrer && "#721c24" ,
                    backgroundColor:errors.quantite_livrer && "#f8d7da" ,
                    borderColor:errors.quantite_livrer && "#f5c6cb"
                  }}
                >
                  <option id="0" value="">Choisissez une quantite</option>
                  { Quantite.map((option) => ( <option key={option} value={option}>{option}</option> ))}
                </Select>
            </FormGroup>
            <FormGroup>
              <label for="contact">Contact</label>
              <Input type="text" id="contact" required placeholder='+229 67887325'
                 {...register("contact", { required: true,pattern: /^[+][0-9]{3} [0-9]*/i })} 
                 style={{ 
                  color: errors.contact && "#721c24" ,
                  backgroundColor:errors.contact && "#f8d7da" ,
                  borderColor:errors.contact && "#f5c6cb"
                }}
              />
            </FormGroup>
            <FormGroup >
                <label id="repere">Repère</label>
                <Input type="text" required placeholder='Carrefour IITA'
                  {...register("repere", { required: true })} 
                  style={{ 
                    color: errors.repere && "#721c24" ,
                    backgroundColor:errors.repere && "#f8d7da" ,
                    borderColor:errors.repere && "#f5c6cb"
                  }}
                />
            </FormGroup>
            <ContainerSubmit>SUIVANT</ContainerSubmit>
      </Form>
    )
  }

  const detail = () => {
    return(
      <Form onSubmit={handleSubmit(onSubmitdetail)}>
          <FormGroupT>
              <label id="detail">Description</label>
              <TextArea type="text"
                {...register("description", { required: true })} 
                style={{ 
                  color: errors.description && "#721c24" ,
                  backgroundColor:errors.description && "#f8d7da" ,
                  borderColor:errors.description && "#f5c6cb"
                }}
              ></TextArea>
          </FormGroupT>
          <CheckGroup>
                  <input type="checkbox" required
                    {...register("check", { required: true })} 
                  />
                  <span
                    style={{
                      marginLeft: "10px"
                    }}
                  
                  >En cochant cette case vous acceptez engégistrer vos DEEE</span>
          </CheckGroup>
          <span id="alert"></span>
          <ContainerSubmit>SOUMETTRE</ContainerSubmit>
      </Form>
    )
  }

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
            Enregistrer vos DEEE
          </div>
          <div
          >
            à céder, nous passerons chercher
          </div>
          {information === null ? formulaire() : detail()}
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
    </InscriptionContainer>
  )
}
