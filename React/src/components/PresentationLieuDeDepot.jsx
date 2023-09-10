import Place from './Place'
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import image from '../assets/lieu2.jpg';
import "../styles/PresentationLieuDeDepot.css"

export default function PresentationLieuDeDepot() {

    const {id} = useParams()

    useEffect(()=> {
        fetch("http://localhost:8000/api/lieuDepots")
        .then((response) => response.json())
        .then((LieuDepot) => {
            setAlllieux(LieuDepot)
            const lieu = LieuDepot.filter(item => item.id === parseInt(id))[0];
            setlieu(lieu);
        })
        .catch((error) => console.log(error.stack));
    } , [id])
    
    const [Alllieux , setAlllieux] = useState([])
    const [Lieu , setlieu] = useState({})

    const Lieux = Alllieux.filter(item => item.id !== parseInt(id)).map(item=>{
        return(
          <Place {...item} key={item.id}/>
        )
      })

    function Capitalize(str) {
    return str;
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
                        <div className="description mx-5">{Lieu.description}</div>
                    </div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe title="iframe" className="gmap_iframe" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Cotonou, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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