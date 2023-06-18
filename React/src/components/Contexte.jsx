import '../styles/Apropos.css'
import Depotoir from './../assets/nature.jfif'

export default function Contexte()
{
    return(
        <div className='bloc-contexte'>
            <div className='texte-contexte'>
                <h3 className='h3'>Contexte</h3>
                <p>
                Nous sommes à une ère où l’évolution des <b>Technologie de l’Information et de la Communication(TIC) </b>
                 provoque continuellement une consommation grandissante en équipements et appareils électriques et électroniques.
                Le processus de fabrication de ces équipements inclut les dangereuses activités d’extraction et de raffinement
                des métaux et terres rares. A cette phase, pour quelques milligrammes de métaux, il faut extraire des 
                dizaines de kilos de roche et des éléments toxiques tels que les métaux lourds, de l'acide sulfurique, et même
                de l’uranium sont rejetés dans l'environnement. Une fois fabriqués, ces équipements nous sont certes d’une grande
                utilité mais à la fin de leur vie, ils deviennent des <b>DEEE</b> (<b>D</b>échets des <b>E</b>quipements <b>E</b>lectriques et <b>E</b>lectroniques) qui,
                quand ils sont mal gérés constituent un nouveau danger pour l’environnement et l’organisme humain.
                </p>
            </div>
            <div className='image-contexte'>
                <img src={Depotoir} alt=""></img>
            </div>
            
        </div>
    )

}