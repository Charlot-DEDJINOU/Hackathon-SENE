import '../styles/Apropos.css'


export default function Approche()
{
    return(
        <div className='bloc-approche'>
           <h3 className='h3'>Nos approches</h3> 
           <p>En vue d’accomplir nos missions, nous comptons adopter et faire adopter le mode de vie des <b>4R</b> pour une consommation plus responsable:</p>
            <figcaption className='section-approche'>
                <div className='approche'>
                <p className='Entete-approche'>Réduire nos déchets</p>
                <p className='corps-approche'>
                    Pour une consommation plus responsable il faut lutter pour la réduction des déchets. Pour cela, il est essentiel d’adopter quelques bons gestes à savoir :
                    <ul>
                        <li> Emprunter ou louer;</li>
                        <li>Privilegier les equipements durables sur le long terme;</li>
                        <li>Privilegier la qualité;</li>
                        <li>Opter pour des equipements réparables.</li>
                    </ul>
                </p>   
                </div>
                <div className='approche'>
                 <p className='Entete-approche'>Réutiliser nos équipements que nous ne pouvons reduire</p>
                 <p className='corps-approche'>
                    Le cycle de vie des objets doit être repensé. Avant de jeter à la poubelle, nous devons reflechir à une façon de lui donner une seconde vie.
                    Quelques pratiques à adopter:
                    <ul>
                        <li>Entretenir et reparer;</li>
                        <li>Echanger ou troquer;</li>
                        <li>Donner;</li>
                        <li>Réinventer.</li>
                    </ul>
                </p>   
                </div>
                <div className='approche'>
                <p className='Entete-approche'>Réparer les équipements qui sont aptes à la reparation.</p>
                <p className='corps-approche'>
                 Il est souvent aussi nécessaire de donner la chance à certains équipement de revivre encore un peu en leur confiant à des services de reparation bien adaptés.
                 </p>   
                </div>
                <div className='approche'>
                <p className='Entete-approche'>Recycler les équipements qui ne peuvent etre reutilisés ni repares</p>
                 <p className='corps-approche'>
                 En recyclant, on permet à un simple déchet de devenir une ressource, qui pourra être revalorisée. Mais pour cela, il est capital de collecter et de trier ses déchets. 
                </p>   
                </div>
            </figcaption>
            <p className='approche-footer'>
            <b>ECO TIC</b> vous accompagne dans la gestion de vos déchets électriques et electroniques.
             Sur notre site web, vous avez la possibilité de nous faire appel si vous avez une 
             quantité importante de dechet à ceder ou trouverez les lieux de dépots les plus 
             proches de vous pour vous en debarasser.  
            </p>
        </div>
    )
}