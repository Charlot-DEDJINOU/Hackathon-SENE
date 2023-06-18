import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import imageform from '../assets/imageform.jpg'
import imageform2 from '../assets/imageform2.jpg'
import imageform3 from '../assets/imageform3.jpg'
import imageform4 from '../assets/imageform4.jpg'
import { useForm } from "react-hook-form";
import "../styles/alert.css"

const Container = styled.div`
  width: 100%;
  height: 685px;
  margin-top:70px;
  display: flex;
  background-color: rgba(86, 85, 85, 0.188) ;
`;
const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
`;
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
`;
const Input = styled.input`
  height: 35px;
  width: 100%;
  font-size: 1rem;
  border-radius: 5px;
  background-color: rgb(212, 207, 207);
  border: none;
  &:focus {
    outline: none;
  }
`;
const Form = styled.form`
  width: 80% ;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const ContainerInput = styled.div`
  width: 80%;
  height:63px;
  display: flex;
  flex-direction:column;
  justify-content: center;
`;

const InputGroup = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormGroup = styled.div`
  width: 48%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
const CheckGroup = styled.div`
  width: 80%;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
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

function EnregistrerStructuresForm() {

  const [currentImage, setCurrentImage] = useState(Images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % Images.length;
      setCurrentImage(Images[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);
 
  const navigate = useNavigate()

  const { register, handleSubmit , formState: { errors } } = useForm();

  const Mise_a_jour = (informations , ele) => {

    if (informations.message === "Inscription réussie") {
      ele.className = "alerte-success";
      setTimeout(()=> navigate("/Login") , 1500)
    } 
    else
      ele.className = "alerte-danger";
      ele.innerText=(informations.message)
  }

  const Register = data => {

    var ele = document.getElementById("alert");

    if (data.motdepasse !== data.motdepasse2) {

      ele.className = "alerte-danger";
      ele.innerText=("Mot de passe non conforme");
    } 
    else {

      var new_data = data ;
      new_data.nom = null ;
      new_data = JSON.stringify(new_data);

      fetch("http://localhost/projets/api/utilisateur/inscription.php?data=" + new_data)
        .then((response) => response.json())
        .then((informations) => {
          Mise_a_jour(informations,ele)
        })
        .catch((error) => alert(error.stack));
    }
  };

  return (
    <Container>
      <FormContainer>
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
          <Form onSubmit={handleSubmit(Register)}>
            <ContainerInput>
              <label style={{ fontFamily: "sans-serif"}} >Nom de la structure</label>
              <Input type="text" id="prenom"
                  {...register("prenom", { required: true})} 
                  style={{ 
                    color: errors.prenom && "#721c24" ,
                    backgroundColor:errors.prenom && "#f8d7da" ,
                    borderColor:errors.prenom && "#f5c6cb"
                  }}
              />
            </ContainerInput>
            <ContainerInput>
              <label style={{ fontFamily: "sans-serif"}} >Email</label>
              <Input
                type="email" id="email" required
                {...register("email", { required: true,pattern: /^[A-Za-z0-9]*@gmail.com/i })} 
                style={{ 
                color: errors.email && "#721c24" ,
                backgroundColor:errors.email && "#f8d7da" ,
                borderColor:errors.email && "#f5c6cb"
              }}
              />
            </ContainerInput>
              <InputGroup>
                <FormGroup>
                  <label style={{ fontFamily: "sans-serif"}}>Téléphone</label>
                  <Input
                    type="tel" id="telephone" placeholder='+229 67887325'
                    {...register("contact", { required: true,pattern: /^[+][0-9]{3} [0-9]*/i })} 
                    style={{ 
                     color: errors.contact && "#721c24" ,
                     backgroundColor:errors.contact && "#f8d7da" ,
                     borderColor:errors.contact && "#f5c6cb"
                   }}
                  />
              </FormGroup>
              <FormGroup>
                <label style={{ fontFamily: "sans-serif"}} >Adresse</label>
                <Input
                  type="text"
                  id="adresse"
                  {...register("adresse", { required: true})} 
                  style={{ 
                    color: errors.adresse && "#721c24" ,
                    backgroundColor:errors.adresse && "#f8d7da" ,
                    borderColor:errors.adresse && "#f5c6cb"
                  }}
                />
              </FormGroup>
            </InputGroup>
            <ContainerInput>
              <label style={{ fontFamily: "sans-serif"}} >Mot de passe</label>
              <Input
                type="password"
                id="password" required minLength={8}
                {...register("motdepasse", { required: true,minLength : 8})} 
                style={{ 
                  color: errors.motdepasse && "#721c24" ,
                  backgroundColor:errors.motdepasse && "#f8d7da" ,
                  borderColor:errors.motdepasse && "#f5c6cb"
                }}
              />
            </ContainerInput>
            <ContainerInput>
              <label style={{ fontFamily: "sans-serif"}} >Confirmer Mot de passe</label>
              <Input
                type="password"
                id="confirmPassword" required
                {...register("motdepasse2", { required: true })} 
                style={{ 
                  color: errors.motdepasse2 && "#721c24" ,
                  backgroundColor:errors.motdepasse2 && "#f8d7da" ,
                  borderColor:errors.motdepasse2 && "#f5c6cb"
                }}
              />
            </ContainerInput>
            <CheckGroup>
                    <input type="checkbox" required
                      
                    />
                    <span
                      style={{
                        marginLeft: "10px"
                      }}
                    
                    >Se souvenir de moi</span>
            </CheckGroup>
            <span id="alert"></span>
            <ContainerSubmit>Envoyer</ContainerSubmit>
          </Form>
        </Formulaire>
      </FormContainer>
      <ImageContainer>
        <img
          src={currentImage.src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        />
      </ImageContainer>
    </Container>
  );
}
export default EnregistrerStructuresForm;
