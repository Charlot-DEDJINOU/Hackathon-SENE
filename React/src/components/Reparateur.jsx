import React, { useState, useEffect, useContext } from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import "../styles/alert.css"
import technicien1 from '../assets/technicien.jpg'
import technicien2 from '../assets/technicien2.jpg'
import technicien3 from '../assets/technicien3.jpg'
import { UserContext } from './ContextUser';
import { useNavigate } from 'react-router-dom';


const ReparateurContainer = styled.div`
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
  margin-bottom: -15px;
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
const Select = styled.select`
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: rgb(212, 207, 207);
  padding-left: 7px;
`
const TextArea = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: rgb(212, 207, 207);
    padding-left: 5px;
    &::-webkit-scrollbar
    {
        width: 0px;
    }
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
const FormGroupT = styled.div`
  width: 80% ;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom : 15px ;
`
const CheckGroup = styled.div`
  width: 80%;
  display: flex;
  font-size: 12px;
  font-weight: 500;
`

const Images = [
  {
    id: 1,src: technicien1,
  },
  {
    id: 2,src: technicien2,
  },
  {
    id: 3,src: technicien1,
  },
  {
    id: 4,src: technicien3,
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

  const { register, handleSubmit , formState: { errors } } = useForm();

  useEffect(()=> {
    fetch("http://localhost/projets/api/ville/villes.php")
        .then((response) => response.json())
        .then((villes) => {
          setvilles(villes["villes"])
          setAllvilles(villes["villes"])
        })
        .catch((error) => console.log(error.stack));
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

    useEffect(()=> {
      fetch("http://localhost/projets/api/metier/metiers.php")
          .then((response) => response.json())
          .then((metiers) => {
            Setmetiers(metiers["metiers"])
          })
          .catch((error) => alert(error.stack));
      } , [])

    function Capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }

  const [Villes , setvilles] = useState([])

  const [Quartiers,setquartiers] = useState([])

  const [Allvilles , setAllvilles] = useState([])

  const [Allquartiers,setAllquartiers] = useState([])

  const [metiers,Setmetiers] = useState([])

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

  const {isLogin} = useContext(UserContext)

  const navigate = useNavigate()

  const [information , setinformation] = useState(null)

  const onSubmitInsription = data => {
          data.ville = JSON.parse(data.ville).nom_ville
          data.quartier = JSON.parse(data.quartier).nom_quartier
          setinformation(data)
      }
    
  
  const onSubmitReparateur = profil => {

    var ele = document.getElementById("alert")

    if(!isLogin)
    {
      ele.className = "alerte-danger"
      ele.innerText = ("Veuillez vous connectez")
      setTimeout(() => navigate("/Login") , 1000)
    }
    else
    {
      const utilisateur = JSON.parse(localStorage.getItem("utilisateur"))
      var new_data = {}
      if(utilisateur !== null)
      {
        var id = utilisateur.id
        new_data = information 
        new_data.id_utilisateur = id
        new_data.description = profil.description
      }

      new_data = JSON.stringify(new_data)
      
      fetch("http://localhost/projets/api/reparateur/create.php?data=" + new_data)
        .then((response) => response.json())
        .then((informations) => {
          Mise_a_jour(informations,ele)
        })
        .catch((error) => alert(error));
    }  
}

    const Mise_a_jour = (informations,ele) => {

      if (informations.message !== "Vous êtes désormais réparateur") 
        ele.className = "alerte-danger";
      else {
        ele.className = "alerte-success"
        setTimeout(() => navigate("/reparateurs") , 1300)
      }
      ele.innerText = (informations.message)
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
                    <label for="metier">Metier</label>
                    <Select id="metier" required
                      {...register("metier", { required: true})} 
                      style={{ 
                        color: errors.metier && "#721c24" ,
                        backgroundColor:errors.metier && "#f8d7da" ,
                        borderColor:errors.metier && "#f5c6cb"
                      }}
                    >
                         <option id="0" value="">Tout reparateur</option>
                         { metiers.map((option) => (<option key={option.id} value={option.designation}>{Capitalize(option.designation)}</option> ))}
                    </Select>
                </FormGroup>
                <FormGroup>
                  <label for="annee_experience">Année d'experience</label>
                  <Input type="number" id="annee_experience" required max={6}
                     {...register("annee_experience", { required: true , max:6})} 
                     style={{ 
                      color: errors.annee_experience && "#721c24" ,
                      backgroundColor:errors.annee_experience && "#f8d7da" ,
                      borderColor:errors.annee_experience && "#f5c6cb"
                    }}
                  /> 
                </FormGroup>
                <FormGroup >
                    <label id="projet">Nombre de projet déjà réalisés</label>
                    <Input type="number" required max={11}
                      {...register("nombre_projet", { required: true , max:11})} 
                      style={{ 
                        color: errors.nombre_projet && "#721c24" ,
                        backgroundColor:errors.nombre_projet && "#f8d7da" ,
                        borderColor:errors.nombre_projet && "#f5c6cb"
                      }}
                    />
                </FormGroup>
                <FormGroup>
                  <label for="contact">Contact</label>
                  <Input type="text" id="contact" placeholder='+229 99999999'
                     {...register("contact", { required: true , pattern: /^[+][0-9]{3} [0-9]*/i })} 
                     style={{ 
                      color: errors.contact && "#721c24" ,
                      backgroundColor:errors.contact && "#f8d7da" ,
                      borderColor:errors.contact && "#f5c6cb"
                    }}
                  /> 
                </FormGroup>
              <ContainerSubmit>SUIVANT</ContainerSubmit>
        </Form>
      )
    }

    const profil = () => {
      return(
        <Form onSubmit={handleSubmit(onSubmitReparateur)}>
            <FormGroupT>
                <label id="detail">Profil</label>
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
                    
                    >En cochant cette case vous acceptez devinir réparateur.Vous aurez trois mois d'essayer gratuit et donc vous souscrire à un abonnement pour âtre afficher sur la page de réparateur </span>
            </CheckGroup>
            <span id="alert"></span>
            <ContainerSubmit>SOUMETTRE</ContainerSubmit>
        </Form>
      )
    }

  return (
    <ReparateurContainer>
      <FormConainer>
        <Formulaire>
          <div
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}
          >
            Devenir un réparateur
          </div>
          {information === null ? formulaire() : profil()}
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
    </ReparateurContainer>
  )
}
