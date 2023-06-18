import React, { useState} from "react"
import { useCart } from "react-use-cart"
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel'
import "../styles/Equipement.css"

const I=styled.i`
     text-decoration: none;
     color:#15A4DF ;
     &:hover{
        color: rgb(0,163,77);
        cursor:pointer ;
     }
`
const Button=styled.button`
padding : 5px 8px ;
height:35px ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`

export default function Equipement(props){

     function Page(n){
      var ele=document.getElementById(n)
      ele.style.transform="rotate3d(0, 1, 0, 90deg)" ;
      setTimeout(()=>setpage(!page),500)
      setTimeout(()=>{ele.removeAttribute("style")},1000)
    }

     const [page,setpage]=useState(true)

     const { addItem , getItem} = useCart() ;

     const images = props.image.split(",")

    return( 
            <div className={props.Class} id={props.id} onMouseLeave={()=>!page ? Page(props.id) : null} >
                {
                    page ?
                    <React.StrictMode>
                        <div className="img">
                            <Carousel interval={4000} pause={false} className="carousel">
                                   {
                                    images.map(item => {
                                        const photo = "http://localhost/projets/images/"+item
                                        return <Carousel.Item>
                                            <img src={photo} alt="" className="img"/>
                                        </Carousel.Item>
                                    })
                                   }
                            </Carousel>
                        </div>
                        <div className="nom"><b>Designation</b> : {props.designation[0].toUpperCase()+props.designation.slice(1).toLowerCase()}</div>
                        <div className="infoaction">
                            <div>
                              <span><b>Prix </b>: {props.price} FCFA</span>
                              <span><b>Etat</b> : {props.etat[0].toUpperCase()+props.etat.slice(1)}</span>
                            </div>
                            <span className="Badge">{getItem(props.id)===undefined ? 0 : getItem(props.id).quantity}</span>
                        </div>
                        <div className="infoClick">
                            <Button onClick={()=>{addItem(props)}}
                            style={{backgroundColor:"rgb(0,163,77)",color:"white"}}>Ajouter</Button>
                            <I><i onClick={()=>Page(props.id)}>voir plus ...</i></I>
                        </div>
                    </React.StrictMode> :
                    <React.StrictMode>
                            <h5>Details</h5>
                            <p className="detail">{props.caracteristique}</p>
                            <I style={{fontSize:"18px"}} onClick={()=>Page(props.id)} className="retour"><i>Return</i></I>
                    </React.StrictMode>
                }
            </div>
    )
}