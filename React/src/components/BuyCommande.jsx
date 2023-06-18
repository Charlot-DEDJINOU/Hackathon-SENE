import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Form from "react-bootstrap/Form"
import { useCart } from 'react-use-cart';
import styled from 'styled-components';
import { useContext} from "react"
import { UserContext } from "./ContextUser"

const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(6, 198, 6) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`
const Span=styled.span`
padding : 5px 8px ;
background-color: rgb(0,163,77) ;
color:white;
font-weight:600 ;
border :none ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
    cursor:pointer;
}
`

export default function BuyCommande(){

    const {
        meta,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();
    const { erroredInputs, touchedInputs } = meta;
   
    const {handleCloseCheck,togglepage,togglebuy,toogleNombre_artvendus}=useContext(UserContext)

    const {cartTotal,emptyCart,totalItems}=useCart()

    const user=JSON.parse(localStorage.getItem('utilisateur'))

    function submit(e){
        e.preventDefault()
        if(erroredInputs.cardNumber===undefined && erroredInputs.expiryDate===undefined && erroredInputs.cvc===undefined){
            togglepage(false)
            togglebuy(true) 
            handleCloseCheck()
            emptyCart() 
        }
     }

    return(
              <Form className="BuyForm-form" onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text"  value={user.nom}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label>Prenom</Form.Label>
                             <Form.Control type="text" value={user.prenom}/>
                     </Form.Group>
                     <div class="row">
                            <Form.Group  style={{ maxWidth: '15rem' }}>
                                    <Form.Label>Numéro de carte</Form.Label>
                                        <svg {...getCardImageProps({ images })} style={{marginLeft:"7px"}}/>
                                        <Form.Control
                                            {...getCardNumberProps()}
                                            isInvalid={touchedInputs.cardNumber && erroredInputs.cardNumber}
                                            placeholder="0000 0000 0000 0000"
                                            required
                                        />
                                    <Form.Control.Feedback type="invalid">{erroredInputs.cardNumber}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group  style={{ maxWidth: '10rem' }}>
                                    <Form.Label>Date d'expiration</Form.Label>
                                    <Form.Control
                                        {...getExpiryDateProps()}
                                        isInvalid={touchedInputs.expiryDate && erroredInputs.expiryDate}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{erroredInputs.expiryDate}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group  style={{ maxWidth: '9rem' }}>
                                    <Form.Label>CVC</Form.Label>
                                    <Form.Control
                                        {...getCVCProps()}
                                        isInvalid={touchedInputs.cvc && erroredInputs.cvc}
                                        placeholder="123"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">{erroredInputs.cvc}</Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group  style={{ maxWidth: '11.5rem' }}>
                                    <Form.Label>Total</Form.Label>
                                    <Form.Control
                                       value={cartTotal+" FCFA"}
                                    />
                          </Form.Group>
                     </div><br />
                     <Span style={{backgroundColor:"rgba(0,0,0,0.6)",marginRight:"15px"}} onClick={handleCloseCheck}> Retour </Span>
                     <Button>Payer</Button>
              </Form>
             
    )
} 