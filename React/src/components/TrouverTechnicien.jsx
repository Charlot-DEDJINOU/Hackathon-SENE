import React, { useState , useEffect, useContext } from "react";
import {useNavigate} from "react-router-dom"
import Technicien from "./Technicien.jsx";
import styled from "styled-components"
import '../styles/TrouverTechnicien.css';
import { UserContext } from "./ContextUser.jsx";

const Button=styled.button`
padding : 5px 8px ;
height:50px ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
background-color: #00A34D ;
&:hover{
    opacity : 0.8 ;
}
`

export default function ListeTechnicien(){ 

  useEffect(()=> {
    fetch("http://localhost:8000/api/reparateurs")
        .then((response) => response.json())
        .then((reparateurs) => {
            SetAlldata(reparateurs)
            setdata(reparateurs)
        })
        .catch((error) => alert(error.stack));
    } , [])

    useEffect(()=> {
      fetch("http://localhost:8000/api/villes")
          .then((response) => response.json())
          .then((villes) => {
            Setvilles(villes)
          })
          .catch((error) => alert(error.stack));
      } , [])

    useEffect(()=> {
      fetch("http://localhost:8000/api/metiers")
          .then((response) => response.json())
          .then((metiers) => {
            Setmetiers(metiers)
          })
          .catch((error) => alert(error.stack));
      } , [])

  const [Alldata,SetAlldata] = useState([])
  const [villes,Setvilles] = useState([])
  const [metiers,Setmetiers] = useState([])

  
  const [data, setdata] = useState([]);

  const Card=data.map(item =>{
        return(
        <Technicien 
             {...item}
        />)
    }) 

  const navigate = useNavigate()

  function search(){
    setdata(Villes(Metiers()))
  }

  function Metiers(){

    const metier = document.getElementById("metier").value

    if(metier === "Tout reparateur")
        return Alldata
    else
      return Alldata.filter(item => item.metier.toLowerCase() === metier.toLowerCase())
  }

  function Villes(array){

    const ville = document.getElementById("ville").value

    if(ville === "Toutes les villes")
        return array
    else
        return array.filter(item => item.ville.toLowerCase() === ville.toLowerCase())
  }

  const {isLogin} = useContext(UserContext)

  return (
    <section className="section_reparateurs">
        <div className="recommandation"> 
              <span>Trouvez un reparateur adapté à votre besoin </span> 
              <Button className="bouton-enregistrer" onClick={() => isLogin ? navigate("/reparateur") : navigate("/Login")}>Enregistrez-vous en tant que réparateur</Button>
        </div>
        <main className="TrouverReparateur">
        <div style={{ display: "flex",justifyContent: "center"}}>
              <label style={{color:"black",marginRight: "15px" , opacity : "0.9"}}>Vous cherchez un</label>
              <select   style={{ width: "17%", marginRight: "25px",backgroundColor: "rgba(255, 255, 255, 0.55)",fontWeight: "bold",height:"30px" }} id="metier" onChange={search}>
                  <option id="0" value="Tout reparateur">Tout reparateur</option>
                  { metiers.map((option) => (<option key={option.id} value={option.designation}>{option.designation}</option> ))}
              </select>
              <label
                  style={{
                    color:"black",
                    marginRight: "15px" ,
                    opacity : "0.9"
                }}
              >De quelle ville </label>
              <select
                  id="ville"
                  onChange={search}
                  style={{ width: "17%",
                  backgroundColor: "rgba(255, 255, 255, 0.55)",
                  fontWeight: "bold",
                  height:"30px"
                  }}
               >
                  <option id="0" value="Toutes les villes">Toutes les villes</option>
                  { villes.map((option) => ( <option key={option.id} value={option.nom_ville}>{option.nom_ville}</option> ))}
              </select>
        </div>
        <div className="bloc-technicien">
            {Card}
        </div>
        </main> 
    </section>   
  )
}
