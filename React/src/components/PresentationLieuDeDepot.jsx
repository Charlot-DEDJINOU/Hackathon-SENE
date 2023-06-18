import Place from './Place'
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import image from '../assets/lieu2.jpg';
import "../styles/PresentationLieuDeDepot.css"



export default function PresentationLieuDeDepot() {

    const {id} = useParams()

    useEffect(()=> {
        fetch("http://localhost/projets/api/lieu_depot/lieux_depot.php")
            .then((response) => response.json())
            .then((lieux_depot) => {
                setAlllieux(lieux_depot["lieu_depots"])
                setlieu(lieux_depot["lieu_depots"].filter(item => item.id === parseInt(id))[0])
            })
            .catch((error) => alert(error.stack));
        } , [id])
    
    const [Alllieux , setAlllieux] = useState([])
    const [Lieu , setlieu] = useState( {
        "id": 1,
        "quartier": "Zè",
        "ville": "Abomey-Calavi",
        "nom": "CEG AKPAKPA",
        "longitude": 0.6,
        "latitude": 0.6,
        "img": "../assets/lieu1.jpg",
        "decris": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "repere": "Cotonou premier von &agrave; gauche au niveau du march&eacute;",
        "publier": 0
    })

    const Lieux = Alllieux.filter(item => item.id !== parseInt(id)).map(item=>{
        return(
          <Place {...item} />
        )
      })

    function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return (
        <section className="presentationlieudedepot">
            <div className="presentationlieu">
                <div className="presentation">
                    <div className="nom-ville">
                        <p><h3>Nom : </h3><span>{Lieu.nom}</span></p>
                        <p><h3>Adresse : </h3><span>{Lieu.ville +" - "+ Capitalize(Lieu.quartier)}</span></p>
                    </div>
                    <div className="infolieu">
                        <img src={image} alt=""/>
                        <div className="description">{Lieu.decris}</div>
                    </div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe title="iframe" className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Cotonou, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
                <div className="autreslieux">
                    {Lieux}
                </div>
            </div>
        </section>
    )
}