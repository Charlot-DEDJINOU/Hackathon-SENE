import React, { useState , useEffect} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import ProgressBarre from './react-step-progress-bar.js';
import '../styles/SuiviDEEE.css'

export default function SuiviDEEE()
{

  const utilisateur_id = JSON.parse(localStorage.getItem("utilisateur")).id

  useEffect(()=> {
    fetch("http://localhost/projets/api/enregistrement_deees/deees_users.php?data="+utilisateur_id)
        .then((response) => response.json())
        .then((deees) => {
            if(deees.message)
              setdeees([])
            else
              setdeees(deees["enregistrement_deees"])
        })
        .catch((error) => alert(error.stack));
    } , [utilisateur_id])
  
  const [deees , setdeees] = useState([])
  const [searchText, setSearchText] = useState('');
  const filteredData = deees.filter(item => item.id.toLowerCase().includes(searchText.toLowerCase()));

  const Card=filteredData.map(item =>{
    return(
    <ProgressBarre
         {...item}
    />)
}) 
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  if(deees.length === 0)
      return <div className='page1'>Vous n'avez pas d'enregistrement de DEEE</div>

  return (
    <div className='page-suivi'>
      <h1 className='titre'>Recherche de DEEE</h1>
      <Form className='recherche'>
        <Form.Group controlId="searchBar" className="recherche-line">
          <FormControl type="text" placeholder="Entrez le numéro de suivi ou une information clé pour rechercher..." onChange={handleSearchChange} style={{width:"89%", boxShadow:"none", outline:"none", border: "1px solid black"}} />
          <Button type="submit" style={{backgroundColor:"#00A34D", border:'none', outline:"none"}}>Rechercher</Button>
        </Form.Group>
      </Form>
      {Card}
    </div>
  );
};

