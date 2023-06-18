import React, { useState, useEffect} from 'react';
import { BsChatLeft, BsEye, BsFillSuitHeartFill, BsFillShareFill, BsXLg } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import ModelBlog from './ModelBlog'
import DataBlog from './DataBlog'
import { useParams } from "react-router-dom"
import "../styles/Blog.css"

export default function PresentationArticle(props) {

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  var currentUser = null 

  const [views, setViews] = useState(0);

  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const [submitComment, setSubmitComment] = useState(true);
  
    const handleInputChange= (event) => {
      if (event.target.value.trim() !== "") {
        setSubmitComment(false);
      } else {
        setSubmitComment(true);
      }
    }
  const handleShareClick = () => {
    setShowSocialIcons(true);
  }
  const handleHideShare = () => {
    setShowSocialIcons(false);
  }

  const handleLike = () => {
    setLikes(likes === 1 ? 0 : 1 - likes);
  }

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
    setViews((views) => {
      return views + 1;
    })}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      text: event.target.comment?.value,
      author: currentUser ? currentUser.name : 'Anonyme'
    };
    setComments([...comments, newComment]);

    event.target.comment.value = '';
  }

  const { id } = useParams()
  const Article = DataBlog().filter(item => item.id === parseInt(id))[0]
  const Articles = DataBlog().filter(item => item.id !== parseInt(id)).map(item => {
    return (
      <div className="Model-Blog2">
        <ModelBlog {...item} />
      </div>

    )
  })

  const [currentImage, setCurrentImage] = useState(Article.image[0])
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = Article.image.indexOf(currentImage)
      const nextIndex = (currentIndex + 1) % Article.image.length
      setCurrentImage(Article.image[nextIndex])
    }, 3000)
    return () => clearInterval(interval)
  }, [currentImage , Article.image])

  return (
    <section className="presentationArticles">
      <span className='bande-haut-article'>
        <span className='Grand-titre'>{Article.Titre}</span>
        <span className='Lire-aussi'>Lire aussi</span>
      </span>

      <div className='Article-large' >
        <img src={currentImage} alt="" className="image-article image-article-large"></img>
        <p className="titre-article-large">{Article.Titre}</p>
        <p className='article-contenu'>{Article.contenu}</p>

        <div className="bas-article">
          <div className="bas-article-gauche">
            <span className="vues-article bloc-down">
              <span className="icone-vue"><BsEye /></span>
              <span className="nombre-vue">{views}</span>
            </span>
            <span className="comment-article bloc-down">
              <span className="icone-comment"><BsChatLeft /></span>
              <span className="nombre-comment">{comments.length}</span>
            </span>
          </div>
          <div className="bas-article-droite">
            <span className="like-article bloc-down">
              <span className="nombre-like">{likes}</span>
              <span className="icone-like">
                <BsFillSuitHeartFill onClick={handleLike} className={likes === 1 ? "like-button liked" : "like-button"} />
              </span></span>
            <span className="share-article bloc-down"> {!showSocialIcons ? <BsFillShareFill onClick={handleShareClick} /> : <BsXLg onClick={handleHideShare} className='HideShare-icon' />}
              {showSocialIcons && (
                <div className="article-social-icons">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}`} target="_blank" rel="noreferrer">
                    <FaPinterest />
                  </a>
                </div>
              )}




            </span>

          </div>
        </div>
        <div className="comment-section">
          <h3 style={{ color: 'black', fontWeight: 'bold', marginBottom: '15px' }}>Commentaires</h3>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-author">{comment.author}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
          <form className='form-comment' onSubmit={handleSubmit}>
            <textarea name="comment" id='comment' placeholder="Ajouter un commentaire" className='textarea-comment' style={{ resize: "none", overflowY: "scroll" }} onChange={handleInputChange}></textarea>
            <button type="submit" className='send-comment' id="submitBtn" disabled={submitComment}>Envoyer</button>
          </form>
        </div>
      </div>
      <div className="Autres-Articles" >
        {Articles}
      </div>
    </section>
  )
}