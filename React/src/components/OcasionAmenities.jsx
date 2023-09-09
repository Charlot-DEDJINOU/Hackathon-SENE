import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import Equipement from './Equipements'
import { useState , useEffect } from 'react'

const OcasionAmenitiesContainer = styled.div`
  width: 100%;
  min-height: 510px;
  height : auto ;
  display : flex ;
  flex-direction : column ;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F5F5F5 ;
`
const AllAmenitiesContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap ;
  margin-bottom:10px ;
`
const HeaderContainer = styled.h1`
  width : 90% ;
  font-family: Iceberg;
  color: #00a34d;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #15a4df;
  width: 50px;
  height: 50px;
  border-radius:25px ;
  background-color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
`

function OcasionAmenities() {

  useEffect(()=> {
    fetch("http://localhost:8000/api/materiels")
        .then((response) => response.json())
        .then((materiels) => {
          setData(materiels)
        })
        .catch((error) => alert(error.stack));
    } , [])
  
  const navigate = useNavigate()

  const [data,setData] = useState([])

  const allquipements= data.filter(item => item.id < 5).map(item=>{
    item.Class="product1"
    return <Equipement {...item} key={item.id}/>
  })

  return (
    <OcasionAmenitiesContainer>
      <HeaderContainer>
        RETROUVEZ DES EQUIPEMENTS OU PIECES D’OCCASION
      </HeaderContainer>
      <AllAmenitiesContainer>
          {allquipements}
          <Icon>
            <FaArrowRight onClick={() => navigate("produits")}/>
          </Icon>
      </AllAmenitiesContainer>
    </OcasionAmenitiesContainer>
  )
}
export default OcasionAmenities
