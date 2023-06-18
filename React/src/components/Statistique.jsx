import '../styles/Apropos.css'

import Afrique from './../assets/afrique.jfif'
import Monde from './../assets/monde.jfif'
import Benin from './../assets/benin.jfif'

export default function Statistique()
{
    return(
        <div className='bloc-statistique'>
            <h3>Statistiques</h3>
            <p>Selon le dernier rapport de <b>Global e-Waste Monitor</b> publié en 2020, les productions annuelles de <b>Dechets des Equipements Electriques et Electroniques</b> sont evalués à plus de:</p>
            <section className='section-statistique'>
                <figcaption>
                    <img alt='Monde' src={Monde} className="Monde"></img>
                    <p><b>53,6 Millions de tonnes</b> à l’échelle mondiale</p>
                </figcaption>
                <figcaption>
                    <img alt='Afrique' src={Afrique} className="Afrique"></img>
                    <p><b>2,4 Millions de tonnes</b> en Afrique</p>
                </figcaption>
                <figcaption>
                    <img alt='Benin' src={Benin} className="Benin"></img>
                    <p> <b>9400 tonnes</b> au Bénin.
                    </p>
                </figcaption>
            </section>
        </div>
    )
}