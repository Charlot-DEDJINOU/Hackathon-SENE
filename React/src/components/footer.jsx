import '../styles/footer.css';
import {BsFacebook, BsLinkedin, BsTwitter, BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";
import ewaste from '../assets/ewaste.png';
import Mastercard from '../assets/mcf-uac.png';
import logo from '../assets/ecotic.png'

export default function Footer(){
    return(
    <footer>
        <div className="footer-container">
                <div className="top-footer">
                    <div className="logo">
                         <img src={logo} alt="ECO TIC"></img>
                    </div>
                    <div className="social-network">
                        <div><BsFacebook className="RS"/></div>
                        <div><BsLinkedin className="RS" /></div>
                        <div><BsTwitter  className="RS"/></div>
                        <div><BsFillGeoAltFill  className="RS"/></div>
                    </div>
                    <div className="phone">
                        <BsFillTelephoneFill className="icon-phone"/> 
                        <span>+22961859271</span>
                    </div>
                </div>
                <div className='Barre'>
                    <span className="boule-barre"></span>
                    <span className="barre"></span>
                    <span className="boule-barre"></span>
                </div>
                <div className="middle-footer">
                    <div className="Liens-utiles">
                        <h3>Liens utiles</h3> 
                        <ul>
                            <li>Accueil</li>
                            <li>Nos services</li>
                            <li>Qui sommes-nous</li>
                        </ul>
                    </div>
                    <div className="Menu">
                        <h3>Menu</h3>
                        <ul>
                            <li>Notre Equipe</li>
                            <li>Nos objectifs</li>
                            <li>Nos réalisations</li>
                        </ul>
                    </div>
                    <div className="Nos-partenaires">
                        <h3>Nos partenaires</h3>
                        <div className='below-patners'>
                            <div className="partners">
                            <li><img src={ewaste} className="ewaste" alt="E-waste"></img></li>
                            <li><img src={Mastercard} className="Mastercard" alt="Mastercard"></img></li>
                        </div> 
                        <div className='container-soutenir'><div className="nous-soutenir">Nous soutenir</div></div>   
                        
                        </div>
                        
                    </div>
                </div>
                <div className="Barre">
                    <span className="boule-barre"></span>
                    <span className="barre"></span>
                    <span className="boule-barre"></span>
                </div>
                <div className="below-footer">
                    <div className="copyright"><p>Copyright © 2023 ECO TIC Tous droits réservés.</p></div> 
                    <div className="final-footer">
                        <p>FAQ</p>
                        <p>Mentions légales</p>
                        <p>Politiques de confidentialité</p>
                    </div>
                </div>  
            </div>
    </footer>
)
}
