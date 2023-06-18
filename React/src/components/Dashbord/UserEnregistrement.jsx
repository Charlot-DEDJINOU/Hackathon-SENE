import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import {
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import FormDeee from "./FormDeee";

const Button=styled.button`
    padding : 5px 8px ;
    background-color: rgb(0,163,77) ;
    color:white;
    font-weight:600 ;
    border :none ;
    border-radius:5px ;
    margin:5px ;
    &:hover{
        opacity : 0.8 ;
    }
`

export default function UserEnregistrement(props) {

  const [showCart,SetShowingCart]=useState(false)
    
  const handleCloseCart = () => SetShowingCart(false);
  const handleShowCart = () => SetShowingCart(true);

  return (
    <TableBody style={{ overflowY: "auto", "::webkit-scrollbar": { width: "0px"}}} >
        <TableRow hover style={{ backgroundColor: "#00a34c60" }}>
            <TableCell component="th" scope="row" style={{ backgroundColor: "#00a34c60", textAlign: "center", }}>{props.nom_utilisateur}</TableCell>
            <TableCell style={{ textAlign: "center", }}>{props.prenom_utilisateur}</TableCell>
            <TableCell style={{ backgroundColor: "#00a34c60", textAlign: "center", }}>{props.quantite_livrer}</TableCell>
            <TableCell style={{ textAlign: "center", }}>{props.repere}</TableCell>
            <TableCell style={{ backgroundColor: "#00a34c60", textAlign: "center", }}>{props.contact}</TableCell>
            <TableCell style={{  textAlign: "center" ,}}>{props.ville}</TableCell>
            <TableCell style={{ backgroundColor: "#00a34c60", textAlign: "center", }}>{props.quartier}</TableCell>
            <TableCell style={{  textAlign: "center" }}><Button onClick={handleShowCart}>Voir plus</Button></TableCell>
        </TableRow>
        <Modal show={showCart} onHide={handleCloseCart} backdrop="static" size="lg"  centered >
                 <Modal.Header closeButton>
                      <Modal.Title>Enregistrement DEEE</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <FormDeee {...props}/>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button style={{backgroundColor:"rgba(0,0,0,0.6"}} onClick={handleCloseCart}> Fermer </Button>
                  </Modal.Footer>
             </Modal> 
    </TableBody>
  );
}