import { useState , useEffect} from "react";
import '../styles/ProfilReparateur.css'
import { FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa'
import { MdHomeRepairService } from 'react-icons/md'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/esm/Button";
import BuyForm from "./BuyForm.jsx"
import StarRating from "./NotationReparateur";
import {useParams} from "react-router-dom"
import styled from "styled-components";
import { useForm } from "react-hook-form";
import premium from "../assets/Premium.jpg"

const Select = styled.select`
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  padding-left: 7px;
`

export default function ProfilReparateur() {

    const {id} = useParams()

    var id_utilisateur = localStorage.getItem("utilisateur")
    if(id_utilisateur === null)
        id_utilisateur = "0"
    else
        id_utilisateur = JSON.parse(id_utilisateur).id


    const [count , setcount] = useState(false)

    useEffect(()=> {
        fetch("http://localhost/projets/api/reparateur/reparateur.php?id_utilisateur=" + parseInt(id))
            .then((response) => response.json())
            .then((reponse) => {
              if(reponse.message)
                setinformation({})
              else
                {
                    setinformation(reponse)
                    if(count === false)
                        {
                            countdown(reponse.jour_restant)
                            setcount(true)
                        }
                }
                
            })
            .catch((error) => console.log(error.stack));
        } , [id,count])

    useEffect(()=> {
        fetch("http://localhost/projets/api/ville/villes.php")
            .then((response) => response.json())
            .then((villes) => {
                setvilles(villes["villes"])
                setAllvilles(villes["villes"])
            })
            .catch((error) => alert(error.stack));

            fetch("http://localhost/projets/api/quartier/quartiers.php")
            .then((response) => response.json())
            .then((quartiers) => {
                setquartiers(quartiers["quartiers"])
                setAllquartiers(quartiers["quartiers"])
            })
            .catch((error) => alert(error.stack));

        } , [])
    
    const [Villes , setvilles] = useState([])

    const [Quartiers,setquartiers] = useState([])

    const [Allvilles , setAllvilles] = useState([])

    const [Allquartiers,setAllquartiers] = useState([])
            
    const [information , setinformation] = useState({})

    const Tof = information.image

    const photo = "http://localhost/projets/images/"+Tof

    const onSubmit = data => {

        const fichier = data.image[0];
        const formData = new FormData();
        formData.append('image', fichier);
    
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost/projets/api/upload.php');
        xhr.send(formData) ;
        
        var new_data = information ;
        if(fichier.name === undefined)
            new_data.image = "icone" ;
        else
            new_data.image = fichier.name ;

        new_data.ville = data.ville ;
        new_data.quartier = data.quartier ;
        new_data.description = data.description ;
        new_data = JSON.stringify(new_data)

        console.log(new_data)

        fetch("http://localhost/projets/api/reparateur/update.php?data="+ new_data)
            .then((response) => response.json())
            .then((message) => {
                console.log(message.message)
            })
            .catch((error) => alert(error.stack));
    }

    const [EditProfil, setEditProfil] = useState(false);
    const handleEditProfile = () => { setEditProfil(true); }
    const handleHideEdit = () => { setEditProfil(false); }

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    const search_quartier = () => {
    
    if(document.getElementById("quartier").value === "")
        {
        setvilles(Allvilles)
        setquartiers(Allquartiers)
        }
    else
        {
        const quartier = JSON.parse(document.getElementById("quartier").value).id_ville
        setvilles(Allvilles.filter(item => quartier.indexOf(item.id) !== -1))
        }
    }

    const search_ville = () => {
    
    if(document.getElementById("ville").value === "")
        {
        setquartiers(Allquartiers)
        setvilles(Allvilles)
        }
    else
        {
        const id_ville = JSON.parse(document.getElementById("ville").value).id
        setquartiers(Allquartiers.filter(item => item.id_ville.indexOf(id_ville) !== -1))
        }
    }

    function countdown(seconds) {
        var timer = setInterval(function() {
          seconds--;
      
          var days = Math.floor(seconds / (24 * 60 * 60));
          var hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
          var minutes = Math.floor((seconds % (60 * 60)) / 60);
          var remainingSeconds = seconds % 60;
      
          var countdownStr = days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes, ' + remainingSeconds + ' secondes';
          document.getElementById("decompte").innerText=(countdownStr);
      
          if (seconds === 0) {
            clearInterval(timer);
          }
        }, 1000);
      } 

    const { register, handleSubmit } = useForm();

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showModal2, setShowModal2] = useState(false);
    
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true)

    const payer = () => {
        handleClose2()

        fetch("http://localhost/projets/api/reparateur/premium.php?data="+ id)
            .then((response) => response.json())
            .then((message) => {
                alert(message.message)
            })
            .catch((error) => alert(error.stack));
    }

      
    return (
        <section className="Page-reparateur">
            <div className="Profil-reparateur">
                <div className="Entete">
                    <p onClick={handleHideEdit} className={!EditProfil && "inactif"}>VUE DU PROFIL</p>
                    {
                        parseInt(id) === parseInt(id_utilisateur) &&
                        <p onClick={handleEditProfile} className={EditProfil && "actif"}>MODIFIER LE PROFIL</p>
                    }
                </div>
                {!EditProfil && <figcaption>

                    <div className="Informations-Profil-reparateur">
                        <div className="bloc-image-reparateur">
                            {Tof === undefined || Tof === "icone" ? <FaUserCircle /> : <img src={photo} alt=""/> }
                        </div>
                        <div className="bloc-nom-reparateur">
                            <p className="nom-reparateur">{information.prenom_utilisateur + " "+ information.nom_utilisateur}</p>
                            <p><MdHomeRepairService style={{ color: 'rgb(0,163,77)', marginRight: '10px', marginBottom: '7px' }} /><span className="titre-page-reparateur"> Titre: </span><br />{information.metier}</p>
                            <p><FaMapMarkerAlt style={{ color: 'rgb(0,163,77)', marginRight: '10px', marginBottom: '7px' }} /><span className="titre-page-reparateur">Adresse:</span><br />{information.ville +" ,"+information.quartier+" ,Benin"}</p>
                            <div><StarRating {...{"etoile" : information.etoile}}/></div>
                        </div>
                        {
                            parseInt(id) === parseInt(id_utilisateur) &&
                            <div className="bloc-premium" >
                                <p style={{ textAlign: "center", backgroundColor: 'rgb(51, 51, 51)', color: 'red', fontWeight: 'bold', marginTop: '-22px', padding: '15px 0px'}}>{information.premium === true ? <span id="decompte" style={{fontSize : "12px"}}>Fin : {information.fin_abonnement}</span> : "Compte inactif"}</p>
                                <p className="Bouton-premium" onClick={handleShow}><span>{information.premium === true ? "Prolonger Abonnement" : "Passer en premium"}</span>
                                <Modal show={showModal} onHide={handleClose} className="Modal" style={{width:"100%", justifySelf:"center", margin:"auto"}}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Passer en mode Premium</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            En choisissant de passer en mode premium, vous bénéficierez d'avantages exclusifs pour améliorer votre expérience sur notre plateforme ECO TIC :
                                            <ul>
                                                <li>Un accès prioritaire à notre réseau de réparateurs qualifiés pour une prise en charge rapide et efficace de vos appareils électroniques.</li>
                                                <li>Des tarifs préférentiels sur les services de réparation pour économiser de l'argent et prolonger la durée de vie de vos appareils.</li>
                                                <li>Un support client personnalisé pour répondre à toutes vos questions et résoudre rapidement les problèmes éventuels.</li>
                                                <li>Des offres spéciales et des promotions réservées aux membres premium pour profiter de réductions exclusives sur les produits et services de notre plateforme.</li>
                                                <li>Une contribution active à la protection de l'environnement en encourageant la réutilisation et le recyclage des appareils électroniques, réduisant ainsi votre empreinte carbone.</li>
                                            </ul>
                                            Choisir le mode premium, c'est donc faire le choix de la qualité, de l'efficacité et de la responsabilité environnementale. Rejoignez dès maintenant notre communauté de membres premium et profitez d'une expérience de réparation d'appareils électroniques sans précédent !
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer className="Modal-footer">
                                        <Button variant="secondary" onClick={handleClose}>
                                            Fermer
                                        </Button>
                                        <Button variant="primary" onClick={handleShow2}>
                                            Payer pour le mode Premium
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal show={showModal2} onHide={handleClose2} className="Modal" style={{width:"100%", height:"100%"}}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Paiement Premium</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <BuyForm/>
                                    </Modal.Body>
                                    <Modal.Footer className="Modal-footer">
                                        <Button variant="secondary" onClick={handleClose2}>
                                            Fermer
                                        </Button>
                                        <Button variant="primary" onClick={payer}>
                                            Enregistrer
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                </p>
                                <p style={{ textAlign: "center" }}>Pour beneficier des avantages du compte reparateur.</p>
                            </div>
                        }
                        {
                            parseInt(id) !== parseInt(id_utilisateur) && information.premium === true &&
                            <div className="hidden-bloc">
                                <img src={premium} alt="" />
                                <ul>Avec nos reparateur premium
                                    <li>Jouissez d'une garantie de qualité</li>
                                    <li>Beneficiez de nos offres promotionnelles</li>
                                </ul>
                            </div>
                        }
                        {
                            parseInt(id) !== parseInt(id_utilisateur) && information.premium === false &&
                            <div className="hidden-bloc">
                                
                            </div>
                        }
                    </div>
                    <div className="section-info-reparateur">

                        <p className="apropos-reparateur"><h6><span className="titre-page-reparateur">PROFIL</span></h6>
                            <p>{information.description}</p>
                        </p>
                        <div>
                            <div className="experience-projets">
                                <div className="bloc-expérience-reparateur">
                                    <label><span className="titre-page-reparateur">Année d'experience</span></label>
                                    <span>{information.annee_experience}</span>
                                </div>
                                <div className="bloc-projets-reparateur">
                                    <label><span className="titre-page-reparateur">Nombre de projets</span> </label>
                                    <span>{information.nombre_projet}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bloc-diplomes">
                        <p><span className="titre-page-reparateur">Diplomes et certifications declarées</span></p>

                    </div>
                </figcaption>
                }
                {EditProfil &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ backgroundColor: 'white', display: "flex", justifyContent: "center", paddingBottom: "10px", marginTop: "15px", paddingTop: "15px" }}>
                            <label style={{ width: "45%" }}><span className="titre-page-reparateur">soumettre une photo pour votre profil</span></label>
                            <input type="file" style={{ width: "45%" }} accept="image/*"  {...register("image")} />
                        </div>
                        <div className="edit-ville-quartier" style={{ padding: "0px 15px" , display : "flex" , alignItems : "center", }}>
                            <div style={{ display: "flex", flexDirection: 'column' }}>
                                <label style={{ color: "black", opacity: "0.9", width: "50%" }}><span className="titre-page-reparateur">Ville</span></label>
                                <Select type="text" id="ville" onChange={search_ville} {...register("ville")}>
                                    <option value={information.ville}>{information.ville}</option>
                                    { Villes.map((option) => ( <option key={option.id} value={JSON.stringify(option)}>{Capitalize(option.nom_ville)}</option> ))}
                                </Select>
                            </div>
                            <div style={{ display: "flex", flexDirection: 'column', justifyItems: 'left' }}>
                                <label style={{ color: "black", marginRight: "0px", opacity: "0.9" }}><span className="titre-page-reparateur">Quartier</span></label>
                                <Select type="text" id="quartier" onChange={search_quartier} {...register("quartier")}>
                                    <option value={information.quartier}>{information.quartier}</option>
                                    { Quartiers.map((option) => ( <option key={option.id} value={JSON.stringify(option)}>{Capitalize(option.nom_quartier)}</option> ))}
                                </Select>
                            </div>
                        </div>

                        <div style={{ backgroundColor: "white", marginTop: '15px', padding: '5px 40px 5px 40px' , display : "flex" , alignItems : "center", justifyContent : "space-between" , height: "120px"}}>
                            <label><span className="titre-page-reparateur">A PROPOS</span></label>
                            <textarea style={{ resize: "none" , width :"88%" , height :"90%"}} {...register("description")}>{information.description}</textarea>
                        </div>
                        <div style={{ color: "black", backgroundColor: 'white', marginTop: '15px'}}>
                            <div>
                                <label> <span className="titre-page-reparateur">Diplomes ou certification declarés</span></label>

                            </div>
                        </div>
                        <div style={{textAlign:"center", margin:'20px'}}>
                            <button id="submit-button" style={{backgroundColor:"rgb(0,163,77)", height:"50px", border:'none', color:"white", fontWeight:"bold", borderRadius:'5px'}}>ENREGISTRER LES MODIFICATIONS</button>
                        </div>
                    </form>}
            </div>

        </section>
    )
}