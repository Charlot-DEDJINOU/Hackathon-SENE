import '../styles/Preinscription.css'
import React, { useState } from 'react';
import Inscription from "./Inscription"
import EnregistrerStructuresForm from './EnregistrerStructuresForm';

export default function Preinscription() {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2]= useState(false);
    const [page , setpage] = useState(0)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    if(page === 1)
        return <Inscription />
    else if(page === 2)
        return <EnregistrerStructuresForm />
    
    return (
        <section className='page-preinscription'>
            <p className='titre-page-preinscription'>Choisir une option d'inscription</p>
            <div className='section-preinscription'>
                <div className='bloc-preinscription' onClick={() => setpage(1)}>
                    <p className='titre-preinscription'>S'inscrire comme personne physique</p>
                    <div className='image-preinscription1'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    {isHovered && (
                        <div className="text-hover">
                            Cliquez si vous<br/> souhaitez créer ce compte<br/> pour utilisation<br/> personnelle
                        </div>
                    )}
                    </div>
                </div>
                <div className='bloc-preinscription' onClick={() => setpage(2)}>
                    <p className='titre-preinscription'>S'inscrire comme personne morale</p>
                    <div className='image-preinscription2'  onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} >
                    {isHovered2 && (
                        <div className="text-hover">
                            Cliquez si vous<br/> souhaitez créer ce compte<br/> au nom d'une entreprise,<br/> organisation ou<br/> institution...
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    )
}