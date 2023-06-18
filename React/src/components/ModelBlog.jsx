import React from "react";
import "../styles/Blog.css"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function ModelBlog(props){


    const [likes, setLikes] = useState(0);
    const [views, setViews] = useState(0);

    useEffect(() => {
        const storedLikes = localStorage.getItem(`likes_${props.id}`);
        if (storedLikes !== null) {
          setLikes(parseInt(storedLikes));
        }
      }, [props.id]);
    
      useEffect(() => {
        localStorage.setItem(`likes_${props.id}`, likes);
      }, [props.id, likes]); 
  
    useEffect(() => {
      setViews(views + 1);
    }, [views]);


    const [currentImage, setCurrentImage] = useState(props.image[0])
    useEffect(() => {
    const interval = setInterval(() => {
    const currentIndex = props.image.indexOf(currentImage)
    const nextIndex = (currentIndex + 1) % props.image.length
    setCurrentImage(props.image[nextIndex])
    }, 3000)
    return () => clearInterval(interval)
    }, [currentImage,props.image])

    const navigates = useNavigate()
    return(
        <figcaption className="Model-Blog"  onClick={() => navigates("/presentationArticle/"+props.id )}>
            <img src={currentImage} alt="" className="image-article"></img>
            <p className="titre-article">{props.Titre}</p>
            <p style={{fontSize:"14px"}}>Publié le {props.date}</p>
        </figcaption>
    )
}