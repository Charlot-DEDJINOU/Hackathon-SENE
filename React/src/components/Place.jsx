import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import image from '../assets/lieu2.jpg';

const PlaceContainer = styled.div`
  width: 280px;
  height: 400px;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0 , 0.3);
  display:flex ;
  flex-direction : column ;
  justify-content: space-evenly ;
  align-items:center ;
  margin : 20px ;
`

const DescriptionContainer = styled.div`
  width: 95%;
  height: 35%;
  font-size: 1rem;
  display : flex ;
  flex-direction : column ;
  justify-content : space-between ;
`
const ImageContainer = styled.img`
  width: 95%;
  height: 50%;
`

const LocateButton = styled.button`
  background-color: #00a34d;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  align-self:flex-end ;
  margin-right : 7px ;
  padding : 5px 10px;
`
const Div = styled.div`
  width : 100% ;
  height : 55% ;
  overflow-y: hidden;
`

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function Place(props) {
  const navigate = useNavigate()
  return (
   <PlaceContainer >       
          <ImageContainer src={image} />
          <DescriptionContainer>
            <div><b>Nom : </b> <i>{props.nom.toUpperCase()}</i></div>
            <div><b>Adresse : </b><i>{props.ville} - {Capitalize(props.quartier)}</i></div>
            <Div><b>Repère : </b><i>{props.repere}</i></Div>
          </DescriptionContainer>
          <LocateButton onClick={() => navigate("/presentationLieu/"+props.id )}>Localiser</LocateButton>
   </PlaceContainer>    
       

  )
}

export default Place
