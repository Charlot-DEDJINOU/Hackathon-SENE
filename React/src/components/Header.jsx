import {NavLink , useNavigate} from 'react-router-dom';
import { useState , useEffect} from 'react';
import { useContext} from "react"
import { UserContext } from "./ContextUser"
import {useCart} from "react-use-cart"
import { FaCartArrowDown } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from "./Cart"
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Modal from "react-bootstrap/Modal"
import img from "../assets/ecotic.png"
import "../styles/Header.css"
import BuyCommande from './BuyCommande';
import { FaCheck , FaCommentDots} from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";


const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(0,163,77) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`

function  Header() {

    const {totalUniqueItems , isEmpty}=useCart()

    const [showCart,SetShowingCart]=useState(false)
    
    const handleCloseCart = () => SetShowingCart(false);
    const handleShowCart = () => SetShowingCart(true);

    const {handleCloseCheck,handleShowCheck,showCheck,togglepage,isbuy,togglebuy,isLogin,toggleLogin}=useContext(UserContext)

    const utilisateur = JSON.parse(localStorage.getItem("utilisateur"))

    function payer(){
        if(isEmpty)
           navigate("/Produits")
        else if(isLogin){
            handleShowCheck()
        }else{
            navigate("/Login")
            togglepage(true)
        }
        handleCloseCart()
    }


    useEffect(()=>{
        if(isbuy)
        setTimeout(()=>{togglebuy(false)},3000) ;
    },[isbuy , togglebuy])

    const navigate = useNavigate()

    const first_message = () => {

        const id_utilisateur = JSON.parse(localStorage.getItem("utilisateur")).id

        var info ={
            "id_utilisateur" : 3 ,
            "id_ami" : id_utilisateur ,
          }
      
          info = JSON.stringify(info)
      
          fetch("http://localhost/projets/api/message/first_message.php?data=" + info)
              .then((response) => response.json())
              .then((conversation) => {
                navigate("/conversation/3")
              })
              .catch((error) => alert(error.stack));
    }

  return (
        <header className='header'>
            <div className='header-logo'>
                <img src={img} alt="logo" className='logo'/>
            </div>
            <Nav className="header-nav" >
                <NavLink className='link' to="/" >Accueil</NavLink>
                <NavLink className='link' to="./Blog">Blog</NavLink>
                <NavLink className='link' to="./A_propos">A propos</NavLink>
                <NavDropdown title="Services" bsPrefix="link-drop" menuVariant="dark">
                    <NavDropdown.Item style={{fontSize : "18px" , fontWeight : "bold"}} onClick={first_message}>Mettre en vente son équipement</NavDropdown.Item>
                    <NavDropdown.Item ><NavLink to="./produits" className='link'>Trouver equipements/piéces</NavLink></NavDropdown.Item>
                    <NavDropdown.Item ><NavLink to="./reparateurs" className='link'>Trouver réparateurs</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Céder DEEE" bsPrefix="link-drop" menuVariant="dark">
                    <NavDropdown.Item><NavLink to={isLogin ? "./enregistrer_DEEEs" : "./Login" } className='link'>S'enregister</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="./lieux_de_depot" className='link'>Rechercher un lieu de dépôt</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to={isLogin ? "./suivie" : "./Login" } className='link'>Suivre ses enregistrements</NavLink></NavDropdown.Item>
                </NavDropdown>
                {
                    isLogin  && <div className='message-header'>
                    <FaCommentDots className="icone-messenger" onClick={() => navigate("/conversation/0")}/>
                    <div className='notification'>
                        <span className='Badge-notification'>2</span>
                        <BsFillBellFill className="icone-notification" onClick={() => navigate("/notifications")}/>
                    </div>
                </div>
                }
                <div className='panier' onClick={handleShowCart} >
                    <Badge bg="light" className='Badge'>{totalUniqueItems}</Badge>
                    <FaCartArrowDown className='image-panier'/>
                </div>
                <NavLink className='link' to="./contact">Contact</NavLink>
                {utilisateur !== null && utilisateur.admin === 1 && <NavLink className='link' to="./dashboard">Dashboard</NavLink>}
                {utilisateur !== null && utilisateur.admin === 0 && <span className='link-deconnecter'>Bienvenue {utilisateur.prenom}</span>}
                {!isLogin && <NavLink className='link' to="./Login">Se connecter</NavLink>}
                { isLogin && <span className='link-deconnecter' onClick={() => {
                    toggleLogin()
                    localStorage.removeItem("utilisateur")
                    navigate("/")
                }}>Se deconnecter</span>}
            </Nav>

            <Modal show={showCart} onHide={handleCloseCart} backdrop="static" size="lg"  centered>
                 <Modal.Header closeButton>
                      <Modal.Title>Votre Panier</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Cart/>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button style={{backgroundColor:"rgba(0,0,0,0.6"}} onClick={handleCloseCart}> Fermer </Button>
                        <Button variant="primary" onClick={payer}>Commander</Button>
                  </Modal.Footer>
             </Modal> 
             <Modal show={showCheck} onHide={handleCloseCheck} backdrop="static" size="lg"  centered>
                 <Modal.Header closeButton>
                      <Modal.Title>Paiement</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <BuyCommande />
                  </Modal.Body>
             </Modal> 
             <Modal show={isbuy}  onHide={()=>togglebuy(false)} backdrop="static" size="sm"  centered closeButton>
                     <Modal.Body>
                                <div className="effectue">
                                    <p className="icone"><span><FaCheck /></span></p>
                                    <p className="texte">Paiement effectué avec succès</p>
                               </div>
                     </Modal.Body>
              </Modal> 
        </header>
  );
}

export default Header;