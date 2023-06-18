import React from 'react'
import styled from 'styled-components'
import "../styles/Service.css"

const ContainerService = styled.div`
  width: 100%;
  height: 400px;
  display : flex ;
  flex-direction : column ;
  justify-content : space-evenly ;
  align-items : center ;
`
const HeaderContainer = styled.h1`
  width: 90%;
  margin-top : 15px ;
  font-family: Iceberg;
  color: #00a34d;
`
const AllContainer = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SquareContainer = styled.div`
  width: 220px ;
  height: 200px ;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size : 1.5rem ;
  padding : 0px 15px ;

`

function OurService() {
  return (
    <ContainerService>
      <HeaderContainer>NOS SERVICES</HeaderContainer>
      <AllContainer>
        <SquareContainer className='left' data-aos="fade-right" data-aos-duration="1500" data-aos-easinf="linear">
            Nous mettons à votre disposisition des équipements et pièces d’occasion
        </SquareContainer>
        <SquareContainer style={{ backgroundColor: '#15A4DF',color: "white"}} data-aos="fade-up" data-aos-duration="1500" data-aos-easinf="linear">
           Nous vous aidons à vendre vos équipements
        </SquareContainer>
        <SquareContainer style={{ backgroundColor: '#00A34D' , color: "white" }} data-aos="fade-up" data-aos-duration="1500" data-aos-easinf="linear">
          Nous vous aidons à trouver des réparateurs 
        </SquareContainer>
        <SquareContainer className='right' data-aos="fade-left" data-aos-duration="1500" data-aos-easinf="linear">
          Nous vous aidons à trouver des lieux de dépôt proche de vous
        </SquareContainer>
            
      </AllContainer>
    </ContainerService>
  )
}
export default OurService