import Equipement from './Equipements'
import styled from "styled-components"
import "../styles/Produits.css"
import { useEffect, useState} from 'react'

const Button=styled.button`
padding : 5px 8px ;
background-color: rgb(0,163,77);
color:white;
font-weight:600 ;
border :none ;
width : 200px ;
border-radius:5px ;
&:hover{
    opacity : 0.8 ;
}
`

export default function Produits(){

    useEffect(()=> {
        fetch("http://localhost/projets/api/materiel/materiels.php")
            .then((response) => response.json())
            .then((materiels) => {
              setAllData(materiels["materiels"])
              setData(materiels["materiels"])
            })
            .catch((error) => alert(error.stack));
        } , [])

    const [Alldata,setAllData] = useState([])

    const [data,setData] = useState([])

    const [isAll , SetIsAll] = useState(true)

    const produits=data.map(item=>{
        item.Class="product"
        return <Equipement {...item} />
    })

    function search(e){

        var text = e.target.value.toLowerCase()
        var array=[]
        if(isAll)
            array = Alldata
        else 
            array = data

        var new_data = array.filter(item => item.designation.toLowerCase().indexOf(text) !== -1)
        setData(new_data)
    }

    function filtre(categorie){

        var ele = document.getElementById("text")
        ele.value = ""

        if(categorie === "Tout"){
            setData(Alldata)
            SetIsAll(true)
            ele.placeholder = "Nos produits"
        }
        else{
            var new_data = Alldata.filter(item => item.type.toLowerCase() === categorie.toLowerCase())
            setData(new_data)
            SetIsAll(false)
            ele.placeholder = categorie+'s'
        }
    }

    return(
        <section className="produits" >
            <div className="categories">
                <div className="title-produits">
                    <label>Rechercher</label>
                    <input type="text" id="text" onChange={search} placeholder="Nos produits"/>
                </div>
                <Button onClick={() => filtre("Tout")}>Nos Produits</Button>
                <Button onClick={() => filtre("Equipement")}>Equipements d'ocassion</Button>
                <Button onClick={() => filtre("Piece")}>Pieces d'occasion</Button>
            </div>
                <div className="allproduits">
                    {produits}
                </div>
       </section>
    )
}
