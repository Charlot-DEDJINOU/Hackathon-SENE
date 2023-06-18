import Quotes from './../assets/quote.png';
import '../styles/Apropos.css'

export default function Citation()
{
    return(
        <div className='bloc-citation'>
            <img alt="Quote" src={Quotes} className='quote'></img>
            <p>UNE SOCIETE SE DEFINIT NON SEULEMENT PAR CE QU'ELLE CREE MAIS AUSSI PAR CE QU'ELLE REFUSE DE DETRUIRE.
            </p>
            <span className='auteur'>John SAWHILL.</span>
        </div>
    )
}