import ModelBlog from './ModelBlog'
import "../styles/Blog.css"
import DataBlog from './DataBlog'
import Typed from 'react-typed';
import { useState } from "react";

export default function Blog(){

    const [recherche, setRecherche] = useState("");

const handleRecherche = (event) => {
    setRecherche(event.target.value);
}

const filteredData = DataBlog().filter(item => {
    return item.Titre.toLowerCase().includes(recherche.toLowerCase()) || item.contenu.toLowerCase().includes(recherche.toLowerCase());
});

const Card=filteredData.map(item =>{
    return(
    <ModelBlog
         {...item}
    />)
}) 

    return(
        <section className="section-blog">
            <div className='haut-blog'><p>
            <Typed
                strings={['Lire les articles de ECO TIC']}
                typeSpeed={60}
                loop/>
            </p>
            <div className='section-recherche'>
            <input type="text" placeholder="RECHERCHER UN ARTICLE " onChange={handleRecherche} className="barre-recherche"></input>
            </div>
            </div>
            {Card}
        </section>
    )
}