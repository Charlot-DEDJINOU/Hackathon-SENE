import Place from "./Place"
import "../styles/LieuxDeDepot.css"
import { useState , useEffect} from "react"

export default function LieuxDepot() {

    useEffect(()=> {
        fetch("http://localhost:8000/api/lieuDepots")
            .then((response) => response.json())
            .then((lieux_depot) => {
                setAlllieux(lieux_depot)
                setlieux(lieux_depot)
                setquartiers(lieux_depot.map(item => {return item.quartier}))
                setvilles(lieux_depot.map(item => {return item.ville}).filter((value, index, self) => self.indexOf(value) === index))
            })
            .catch((error) => alert(error.stack));
        } , [])

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }

    const [Alllieux , setAlllieux] = useState([])
    const [lieux , setlieux] = useState([])
    const [quartiers , setquartiers] = useState([])
    const [villes , setvilles] = useState([])

    const Lieux = lieux.map(item=>{
        return <Place {...item} key={item.id}/>
    })

    function RechercherVille()
    {
        const texte = document.getElementById("ville").value
        if(texte === "Toutes les villes")
            setquartiers(Alllieux.map(item => {return item.quartier}))
        else 
            setquartiers(Alllieux.filter(item => item.ville.toLowerCase() === texte.toLowerCase()).map(item => {return item.quartier})) ;
        
        setlieux(arrayQuartier(arrayVille()))
    }

    function RechercherQuartier()
    {
        setlieux(arrayQuartier(arrayVille()))
    }
    
    function arrayVille()
    {
        const texte = document.getElementById("ville").value
        if(texte === "Toutes les villes")
            return Alllieux
        else 
            return Alllieux.filter(item => item.ville.toLowerCase() === texte.toLowerCase())
    }

    function arrayQuartier(tab)
    {
        const texte = document.getElementById("quartier").value
        if(texte === "Tout les quartiers")
            return tab
        else 
            return tab.filter(item => item.quartier.toLowerCase() === texte.toLowerCase())
    }

    return(
        <section className="LieuxDepot">
            <div className="LieuxDepot-Header">
                <span>Nos lieux de dépôt</span>
                <select onChange={RechercherVille} id="ville">
                      <option id="0" value="Toutes les villes">Toutes les villes</option>
                      { villes.map((option) => ( <option key={option} value={option}>{option}</option> ))}
                </select>
                <select onChange={RechercherQuartier} id="quartier">
                      <option id="0" value="Tout les quartiers">Tout les quartiers</option>
                      { quartiers.map((option) => ( <option key={option} value={option}>{Capitalize(option)}</option> ))}
                </select>
            </div>
            <div className="AllLieuxDepot">
                {Lieux}
            </div>
        </section>
    )
}