import React from "react";
import Citation from './Citation.js'
import Contexte from './Contexte.js'
import Equipe from './Equipe.js'
import Approche from './Approche.jsx'
import Statistique from './Statistique.js'
import About from "./About.jsx";
import '../styles/Apropos.css'


export default function Apropos()
{
    return(
        <div style={{marginTop:"100px" , width:"100%"}}>
            <About style={{width:"80%"}}/>
            <Contexte/>
            <Statistique/>
            <Approche/>
            <Equipe/>
            <Citation/>
        </div>
    )
}