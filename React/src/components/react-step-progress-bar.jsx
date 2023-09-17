import { ProgressBar, Step } from 'react-step-progress-bar';
import '../styles/ProgressBarre.css';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import { RiRecycleFill } from 'react-icons/ri';
import { GiCycle, GiAutoRepair, GiTowTruck } from 'react-icons/gi';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Process from '../assets/recycles.png'
import Process1 from '../assets/samy.jpg'

export default function ProgressBarre(props) {

  var Gestion = props.type_gestion
  const EtatCollecte=props.collecter;
  const EtatTraitement= props.traiter;

  return (
    <div className='section-suivi'>
      <Card style={{backgroundColor:"#ddd"}}>
        <Card.Body>
          <ListGroup variant='flush' style={{backgroundColor:"#ddd"}}>
            <ListGroup.Item style={{backgroundColor:"#ddd"}}><strong>Numéro de suivi: {props.id}</strong></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#ddd"}}><strong>Date d'enregistrement: {props.date_enregistrement}</strong></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#ddd"}}><strong>Quantité de DEEE: {props.quantite_livrer}</strong></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#ddd"}}><strong>Détails : {props.description}</strong></ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <ProgressBar>
        <div className='ProgressBar'>
          <Step>
            {({ accomplished }) => (
              <div className='step'>
                <div className='circle vert-circle'>
                 <i className='fa fa-check'><BsCheckLg /></i>
                </div>
                <p className="step-title">Enregistré.<br/> Date: {props.date_enregistrement}</p>
              </div>
              
            )}
          </Step>
          <div className={EtatCollecte? 'trait vert-circle': 'trait cendre'}></div>
          <Step>
            {({ accomplished }) => (
              <div className='step'>
              <div className={EtatCollecte? 'circle vert-circle': 'circle cendre'}>
                {EtatCollecte ? <i className='fa fa-check'><GiTowTruck/></i> : "Collecte"}
              </div>
              <p className="step-title" style={{textAlign:"center"}}>
                {EtatCollecte===1 && "Collecté."}
                <br/>
                {EtatCollecte===1 && `Date: ${props.date_collecte}`}
                {EtatCollecte===0 && "En attente"}
              </p>
              </div>
            )}
          </Step>
          <div className={EtatTraitement? 'trait vert-circle': 'trait cendre'} ></div>
          <Step>
            {({ accomplished }) => (
              <div className='step'>
              <div className={EtatTraitement? 'circle vert-circle': 'circle cendre'}>
                {EtatTraitement ? 
                <i className='fa fa-check' style={{color:"white", width:'95%', height:'95%'}}>
                <img src={Process} alt="" style={{borderRadius:"50%", width:"100%", height:"100%", padding:"auto"}}/>
                </i> : 
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>Traitement 
                <img src={Process} alt="" className='rotate'/>
                </div>}
              </div>
              <p className="step-title" style={{textAlign:"center"}}>
                {EtatTraitement===1 && "Traité."}
                <br/>
                {EtatTraitement===1 && `Date: ${props.dateTraitement}`}
                {EtatTraitement===0 && "En attente"}
              </p>
              
              </div>
            )}
          </Step>
          <div className={EtatTraitement? 'trait vert-circle': 'trait cendre'}></div>
          <Step>
            {({ accomplished }) => (
              <div className='step'>
              <div className={EtatTraitement? 'circle vert-circle': 'circle cendre'}>
                {props.EtatTraitement ? <i className='fa fa-check'>
                {Gestion==='Reuse' && <GiCycle/>}
                {Gestion==="Repair"&&<GiAutoRepair/>}
                {Gestion==="Drop"&& <BsXLg/>}
                {Gestion==="Recycle"&& <RiRecycleFill/>}</i> : "Orientation"}
              </div>
              <p style={{textAlign:"center"}} className="step-title">
                {EtatTraitement===0 && "En attente"}
                {Gestion==="Repair" && "Reparé et mis en vente solidaire"}
                {Gestion==="Reuse" && "Réutilisé"}
                {Gestion==="Recycle"&&"Recyclé"}
                {Gestion==="Drop"&& "Eliminé"}
                
              </p>
              </div>
            )}
          </Step>
        </div>
              
    
      </ProgressBar>
              

    </div>
  );
};
