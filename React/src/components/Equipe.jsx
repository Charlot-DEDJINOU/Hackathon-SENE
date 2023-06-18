import '../styles/Apropos.css'
import Nerys from './../assets/Nerys.jpg'
import Samuel from './../assets/samy.jpg'
import gabin from './../assets/gabin.jpg'
import rafiatou from './../assets/rafitou.jpg'

export default function Equipe()
{
    const image = "http://localhost/projets/image/charlot2.jpg"
    
    return(
        <section className='bloc-equipe'>
            <h3 className='h3'>NOTRE EQUIPE</h3>
            <p>L’implémentation d'une telle solution a été possible grâce au travail acharné d'une équipe très compétente de jeunes dynamiques et dévoués opérant dans le numérique et très passionnés de l’environnement.</p>
            <figcaption className='equipe' >
                <div className='membre-equipe'>
                    <img src={Samuel} alt="" />
                    <span className='nom-membre'>Samuel TOHOUEGNON</span>
                    <span className='role-membre'>Développeur web & mobile, digital marketer</span>
                </div>
                <div className='membre-equipe'>
                    <img src={Nerys} alt="" />
                    <span className='nom-membre'>Nérys TCHIBOZO</span>
                    <span className='role-membre'>Administratrice réseau et système</span>
                </div>
                <div className='membre-equipe'>
                    <img src={image} alt="" />
                    <span className='nom-membre'>Charlot DEDJINOU</span>
                    <span className='role-membre'>Developpeur web & mobile</span>
                </div>
                <div className='membre-equipe'>
                    <img src={rafiatou} alt="" />
                    <span className='nom-membre'>Rafiatou GNANFON</span>
                    <span className='role-membre'>Designeuse graphique</span>
                </div>  
                <div className='membre-equipe'>
                    <img src={gabin} alt="" />
                    <span className='nom-membre'>Gabin BADJOGOUNME</span>
                    <span className='role-membre'>Développeur web & mobile</span>
                </div>
            </figcaption>
        </section>
    )
}