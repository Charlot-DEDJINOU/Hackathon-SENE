import React from 'react'
import styled from 'styled-components'
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { FaChevronRight } from 'react-icons/fa'
import Place from './Place'

const DepotPlace = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap : wrap ;
  margin-bottom: 15px ;
`
const HeaderContainer = styled.h1`
  font-family: Iceberg;
  color: #00a34d;
  width: 90%;
  `
 const AllContainer = styled.div`
  width: 100%;
  min-height: 520px;
  height:auto ;
  display : flex ;
  flex-direction : column ;
  justify-content: space-evenly;
  align-items: center;
  background-color : #D9D9D9 ;
`

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display : flex ;
  justify-content: center;
  align-items: center;
  color: #00a34d;
  font-size: 25px;
  cursor: pointer;
`

function OurDepotPlace() {

  useEffect(()=> {
    fetch("http://localhost/projets/api/lieu_depot/lieux_depot.php")
        .then((response) => response.json())
        .then((lieux_depot) => {
            setAlllieux(lieux_depot["lieu_depots"])
        })
        .catch((error) => alert(error.stack));
    } , [])

    const [Alllieux , setAlllieux] = useState([])
    
    const navigate = useNavigate()
    const Lieux = Alllieux.filter(item => item.id <= 4).map(item=>{
      return(
        <Place {...item} />
      )
    })
  return (
     <AllContainer>
        <HeaderContainer>NOS LIEUX DE DEPÔTS</HeaderContainer>
          <DepotPlace data-aos="fade-right" data-aos-duration="1500" data-aos-easinf="linear">
              {Lieux}
              <Icon>
                <FaChevronRight style={{width:"100%",height:"100%"}} onClick={() => navigate("lieux_de_depot")}/>
              </Icon>
          </DepotPlace>    
     </AllContainer>

  )
}
export default OurDepotPlace