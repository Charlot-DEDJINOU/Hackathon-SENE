import React , { useState } from 'react';
import '../styles/Contact.css'
import styled from 'styled-components';

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

export default function Contact()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    

    function handleSubmit(event) {
      event.preventDefault();
  
      if (name === "" || email === "" || subject==="" || phone==="" || message==="") {
        setErrorMessage("Tous les champs doivent être remplis !");
        return;
      }
  
      setErrorMessage("");
    }

return(
    <section className='section-contact'>
        <div className='contact-part'>
            <h4 className='titre-contact'>POUR PLUS D'INFORMATIONS, N'HÉSITEZ PAS À NOUS CONTACTER.</h4>

  <form onSubmit={handleSubmit}>

        <div className='formulaire-contact' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
        <div style={{ width: "49%" }}>
        
            <label className='label' htmlFor="name" style={{fontWeight:'bolder', letterSpacing:'2px', textTransform:'uppercase', fontSize:'15px'}}>Nom</label>
        <input
        placeholder='Votre nom'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          style={{ width: "100%", marginRight: "3%", borderRadius:'3px', border:'1px solid white', fontSize:"15px" }}
        />
        </div>
        <div style={{ width: "49%" }}>
            <label className='label' htmlFor="email" style={{fontWeight:'bolder', letterSpacing:'2px', textTransform:'uppercase', fontSize:'15px'}}>Email</label>
        <input
        placeholder='Votre email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          style={{ width: "100%", borderRadius:'3px', border:'1px solid white', fontSize:"15px" }}
        />
        </div>
        
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginTop: "20px" }}>
        <div style={{ width: "49%" }}>
            <label className='label' htmlFor="subject" style={{fontWeight:'bolder', letterSpacing:'2px', textTransform:'uppercase', fontSize:'15px'}}>Objet</label>
        <input
        placeholder="L'objet du message"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          id="subject"
          style={{ width: "100%", marginRight: "3%", borderRadius:'3px', border:'1px solid white', fontSize:"15px" }}
        />
        </div>
        <div style={{ width: "49%" }}>
            <label className='label' htmlFor="phone" style={{fontWeight:'bolder', letterSpacing:'2px', textTransform:'uppercase', fontSize:'15px'}}>Numéro de téléphone</label>
        <input
        placeholder='Votre numéro de téléphone'
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          style={{ width: "100%", borderRadius:'3px', border:'1px solid white', fontSize:"15px" }}
        />
        </div>
        
      </div>
      <div style={{ width: "80%", marginTop: "20px" }}>
        <label className='label' htmlFor="message" style={{fontWeight:'bolder', letterSpacing:'2px', textTransform:'uppercase', fontSize:'15px'}}>Message</label>
        <textarea
            placeholder='Entrez votre message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          rows="5"
          style={{ width: "100%", marginTop: "10px", height:"150px", resize:"none", backgroundColor:'white', borderRadius:'3px', fontSize:"15px" }}
        ></textarea>
      </div>
      {errorMessage !== "" && (
        <p  className="message-derreur">{errorMessage}</p>
      )}
      <div className='div-soumettre'><Button  style={{ marginTop: "20px" }}>Soumettre</Button></div>
      

    </div>
    </form>
        </div>
        
        <div className='section-adresse'>
            <p className='situation-geo'>
                <h5>ADDRESSE</h5>
                Zogbadjè, Abomey-Calavi, Benin.
            </p>
            <p className='numero-tel'>
               <h5>NUMERO DE TELEPHONE</h5> 
                +229-692-04-879
            </p>
            <p className='adresse-mail'>
                <h5>ADRESSE EMAIL </h5>
                infoecotic@gmail.com
            </p>
        </div>
    </section>
)
}