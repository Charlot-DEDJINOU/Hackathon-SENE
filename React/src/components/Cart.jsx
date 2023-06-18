import styled from "styled-components"
import {useCart} from "react-use-cart"


const Body=styled.div`
    display: flex;
    width :100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
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


export default function Cart(){
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart()

      var k=1
      var bodyelements=items.map(item=>{
        return(
            <tr>
                <th scope="col">{k++}</th>
                <td>{item.designation}</td>
                <td>{item.price+" FCFA"}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity*item.price+" FCFA"}</td>
                <td>
                    <Button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</Button>
                    <Button style={{backgroundColor:"rgba(21, 164, 223, 0.83)"}}>{item.quantity}</Button>
                    <Button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</Button>
                    <Button onClick={()=>removeItem(item.id)} className="remove" style={{backgroundColor:'rgb(218, 63, 63)'}}>supprimer</Button>
                </td>
            </tr>
        )})
     
     if(isEmpty)  return( 
        <Body>
            <div>
                Votre panier est vide
            </div>
       </Body>
     )
      return (
        <Body>
             <table class="table" >
                     <thead style={{backgroundColor:'rgb(0,163,77)', color:"white"}}>
                             <tr>
                                <th scope="col">#</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Quantité</th>
                                <th scope="col">Total</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                      <tbody>
                          {bodyelements}
                      </tbody>
                      <tfoot style={{backgroundColor:'rgb(0,163,77)' , color : "white"}}>
                        <tr>
                            <th scope="col" colSpan={5}>Total</th>
                            <th scope="col">{cartTotal+" FCFA"}</th>
                        </tr>
                      </tfoot>
               </table>
        </Body>
      );
}
