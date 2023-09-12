import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {useNavigate} from "react-router-dom"
import styled from 'styled-components'
import aboutimage from '../assets/team.jpg'


const Container = styled.div`
  width: 100%;
  height: 520px;
  display: flex ;
  justify-content : center ;
  align-items:center ;
  margin-top:50px ;
`

const AboutContainer = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Imagecontainer = styled.img`
  width: 50%;
  height: 90%;
  object-fit : contain ;
  position: relative;
  margin-right: 3rem;
`

const Abouttext = styled.div`
  width: 45%;
  height: 90%;
  display : flex ;
  flex-direction : column ;
  position: relative;
  margin-right: 1rem;
  font-size: 1.1rem;
`
const Headertext = styled.h1`
  color: #00a34d;
  position: relative;
  margin-left: 10rem;
  font-family: Iceberg;
`

const IconContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self : flex-end ;
  cursor: pointer;
  position: relative ;
  color: #00a34d;
`


function About() {

  const navigate = useNavigate()
  return (
    <Container>
      <AboutContainer>
        <Imagecontainer src={aboutimage} data-aos="fade-right" data-aos-duration="1500" data-aos-easinf="linear" ></Imagecontainer>
        <Abouttext data-aos="fade-left" data-aos-duration="1500" data-aos-easinf="linear">
          <Headertext> Notre Mission</Headertext>
          <p style={{textAlign:"justify"}}>
               Nous nous engageons à réduire l'exploitation des sols ainsi que les conséquences négatives des déchets issus des équipements électriques et électroniques pour minimiser notre empreinte écologique et préserver un environnement durable. Pour cela, nous travaillons continuellement à améliorer nos pratiques et à adopter des stratégies plus durables, telles que la réduction de notre consommation de ressources naturelles, la promotion de la réutilisation et du recyclage, et la mise en place de solutions innovantes pour gérer nos déchets de manière responsable.
               En tant qu'entreprise consciente de son impact sur l'environnement, nous considérons notre responsabilité de contribuer à un avenir plus durable en travaillant de manière responsable et en adoptant des pratiques plus durables. Nous savons que chaque petit pas compte et nous nous engageons à faire notre part pour préserver notre planète pour les générations futures.
          </p>
          <IconContainer>
            
          </IconContainer>
        </Abouttext>
      </AboutContainer>
    </Container>
  )
}
export default About