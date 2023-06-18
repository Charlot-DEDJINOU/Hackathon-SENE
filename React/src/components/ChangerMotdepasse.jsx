import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../assets/image1.jpg";
import nature from "../assets/nature.jpg";
import aboutimage from "../assets/aboutimage.jpg";

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
  height: 45%;
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
  background-color: ${({ success }) => (success ? "#00a34c60" : "#00a34d")};
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

function ChangerMotdepasse() {
  const [currentImage, setCurrentImage] = useState(Images[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % Images.length;
      setCurrentImage(Images[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const [success, setSuccess] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleReset = (event) => {
    event.preventDefault();
   
    if (password === "" || confirmPassword === "") {
      setMessage("Veuillez remplir tous les champs");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Les deux mots de passe doivent être identiques");
      return;
    }
 
    const data = {
      password: password,
    };
    fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Votre mot de passe a été réinitialisé");
          setSuccess(true);
          setPassword("");
          setConfirmPassword("");
        } else {
          setMessage(
            "Une erreur s'est produite. Veuillez réessayer plus tard..."
          );
          setSuccess(false);
        }
      })
      .catch((error) => {
        setMessage(
          "Une erreur s'est produite. Veuillez réessayer plus tard..."
        );
        setSuccess(false);
      });
  };
  return (
    <Container>
      <FormContainer>
        <Formulaire>
          <Form onSubmit={handleReset}>
            <ContainerInput>
              <p
                style={{
                  fontFamily: "sans-serif",
                  position: "relative",
                  top: "1rem",
                }}
              >
                {" "}
                Nouveau mot de passe{" "}
              </p>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
              />
            </ContainerInput>
            <ContainerInput>
              <p
                style={{
                  fontFamily: "sans-serif",
                  position: "relative",
                  top: "1rem",
                }}
              >
                Confirmer le nouveau mot de passe
              </p>
              <Input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </ContainerInput>
            <ContainerSubmit success={success}>
              {success
                ? "Réinitialiser le mot de passe"
                : "Réinitialiser le mot de passe"}{" "}
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
export default ChangerMotdepasse;
