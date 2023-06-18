import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import image1 from "../assets/image1.jpg";
import nature from "../assets/nature.jpg";
import aboutimage from "../assets/aboutimage.jpg";
import emailjs from "@emailjs/browser";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
  height: 42%;
  border-radius: 2%;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  transition-property: all;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
`;

const ContainerSubmit = styled.button`
  cursor: pointer;
  width: 70%;
  height: 2rem;
  color: white;
  margin-top: 2rem;
  position: relative;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Sans-serif;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  background-color: ${({ success }) => (success ? "  #00a34c77" : "#00a34d")};
  cursor: ${({ success }) => (success ? "none" : "pointer")};
  &:hover{
    background-color:#00a34c77;
  }
`;

const Input = styled.input`
  height: 2rem;
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
  min-height: 55%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ContainerInput = styled.div`
  width: 70%;
  height:100%
  display: flex;
  flex-direction:column;
  justify-content: center;
`;

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
];

function ResetPassword() {

  const [currentImage, setCurrentImage] = useState(Images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % Images.length;
      setCurrentImage(Images[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      to_email: email,
      reset_link: "https://www.example.com/reset-password", 
    };
    
    emailjs
      .send(
        "react_contact_detail",
        "react_contact_form",
        templateParams,
        "RW0RfjmxcZU3_76JC"
      )
      .then(
        () => {
          setMessage(
            "Un e-mail de réinitialisation a été envoyé à votre adresse e-mail."
          );
          setSuccess(true);
        },
        (error) => {
          setMessage(
            "Une erreur s'est produite.Veuillez réessayer plus tard.."
          );
          setSuccess(false);
        }
      );
  };

  return (
    <Container>
      <FormContainer>
        <Formulaire>
          <Form ref={form} onSubmit={sendEmail}>
            <h3
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.2rem",
                position: "relative",
                bottom: "2rem",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Réinitiliser votre mot de passe ici
            </h3>
            <ContainerInput>
              <label for="email" style={{ fontFamily: "sans-serif" }}>
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Entrer votre adresse email"
              />
            </ContainerInput>
            <ContainerSubmit success={success} >
              {success ? "Envoyer" : "Envoyer"}
            </ContainerSubmit>
            {message && (
              <div
                role="alert"
                style={{
                  color: "#00a34d",
                  position: "relative",
                  top: "1rem",
                  fontFamily: "sans-serif",
                  fontSize: ".8rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {message}
              </div>
            )}
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

export default ResetPassword;
