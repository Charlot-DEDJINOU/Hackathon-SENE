import React from "react";
import styled from "styled-components";
import {
  FaDesktop,
  FaMobileAlt,
  FaParachuteBox,
  FaEthernet,
} from "react-icons/fa";

const ObjectiveContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;
  padding-bottom: 30px;
  
`;
const IconsTextContainer = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  margin: 25px;
  position: relative;
  flex-direction: row;
  
  left:3rem;
`;
const HeaderContainer = styled.h1`
  font-family: iceberg;
  color: #00a34d;
  width: 87%;
  font-weight: bold;
`;
const Objective = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 15px;

`;
const Objectivenumber = styled.div`
  font-weight: 600;
  width: 3rem;
  height: 3rem;
  font-size: 30px;
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
`;
const TextContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-size: 15px;
  margin: 10px;
`;
const ObjectiveIcon = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const NumberContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

function OurObjective() {
  return (
    <ObjectiveContainer>
      <HeaderContainer>NOS OBJECTIFS</HeaderContainer>
      <IconsTextContainer>
        <Objective
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easinf="linear"
        >
          <NumberContainer>
            <Objectivenumber style={{ backgroundColor: " #00A34D" }}>
              01
            </Objectivenumber>
          </NumberContainer>

          <ObjectiveIcon>
            <FaDesktop style={{ width: "79px", height: "70px" }} />

            <TextContainer>
              <p>
                Sensibiliser sur les dangers liés à la mauvaise gestion des DEEE
                et l’intérêt d’adopter le mode de vie des 4 R
              </p>
            </TextContainer>
          </ObjectiveIcon>
        </Objective>

        <Objective
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easinf="linear"
        >
          <NumberContainer>
            <Objectivenumber style={{ backgroundColor: "#15A4DF" }}>
              02
            </Objectivenumber>
          </NumberContainer>
          <ObjectiveIcon>
            <FaMobileAlt style={{ width: "79px", height: "70px" }} />

            <TextContainer>
              <p style={{ width: "100%" }}>
                Faire la collecte de DEEE au Benin.{" "}
              </p>
            </TextContainer>
          </ObjectiveIcon>
        </Objective>

        <Objective
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easinf="linear"
        >
          <NumberContainer>
            <Objectivenumber style={{ backgroundColor: " #00A34D" }}>
              03
            </Objectivenumber>
          </NumberContainer>
          <ObjectiveIcon>
            <FaParachuteBox style={{ width: "79px", height: "70px" }} />

            <TextContainer>
              <p>
                Favoriser le marché de l’échange des équipements et pièces
                d’occasion et la mise en relation des réparateurs avec les
                clients.{" "}
              </p>{" "}
            </TextContainer>
          </ObjectiveIcon>
        </Objective>
        <Objective
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easinf="linear"
        >
          <NumberContainer>
            <Objectivenumber style={{ backgroundColor: "#15A4DF" }}>
              04
            </Objectivenumber>
          </NumberContainer>
          <ObjectiveIcon>
            <FaEthernet style={{ width: "79px", height: "70px" }} />

            <TextContainer>
              <p style={{ width: "100%" }}>Faire recycler les DEEE </p>
            </TextContainer>
          </ObjectiveIcon>
        </Objective>
      </IconsTextContainer>
    </ObjectiveContainer>
  );
}
export default OurObjective;
