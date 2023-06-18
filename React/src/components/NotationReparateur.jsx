import React, { useState } from 'react';
import {BsStarFill} from 'react-icons/bs';

const StarRating = (props) => {

  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [nombrestar, setnombrestar] = useState(0);

    const handleRate1=() => {
      setRating1(1)
      setRating1(0)
      setRating2(0)
      setRating3(0)
      setRating4(0)
      setRating5(0)
      setnombrestar(1)
    }
    const handleRate2=() => 
    {
      setRating1(1)
      setRating2(1)
      setRating3(0)
      setRating4(0)
      setRating5(0)
      setnombrestar(2)
    }
    const handleRate3=() => 
    {
      setRating1(1)
      setRating2(1)
      setRating3(1)
      setRating4(0)
      setRating5(0)
      setnombrestar(3)
    }
    const handleRate4=() => 
    {
      setRating1(1)
      setRating2(1)
      setRating3(1)
      setRating4(1)
      setRating5(0)
      setnombrestar(4)
    }
    const handleRate5=() => 
    {
        setRating1(1)
        setRating2(1)
        setRating3(1)
        setRating4(1)
        setRating5(1)
        setnombrestar(5)
    }
  return (
    <div style={{display:"flex", flexDirection : "column" , justifyContent:'space-between'}}>
        <div style={{display:"flex", justifyContent:'space-between'}}><p style={{color:'rgb(0,163,77)', fontWeight:'bold'}}>{props.etoile+" étoiles"}</p> <p style={{cursor:'pointer'}}><BsStarFill className={rating1&&"vertNote"} onClick={handleRate1}/><BsStarFill onClick={handleRate2} className={rating2&&"vertNote"}/><BsStarFill onClick={handleRate3} className={rating3&&"vertNote"}/><BsStarFill onClick={handleRate4} className={rating4&&"vertNote"}/><BsStarFill onClick={handleRate5} className={rating5&&"vertNote"}/></p></div>
        <textarea style={{resize:"none" , borderRadius:"5px"}} placeholder="Laisser un avis..." ></textarea>
        <button style={{backgroundColor:"rgb(0,163,77)", color:"white", fontWeight:"bold", border:"none", borderRadius:"5px" , marginTop : "10px"}}>Envoyer</button>
    </div>
  );
};

export default StarRating;
