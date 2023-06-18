import Carousel from 'react-bootstrap/Carousel'
import Typed from 'react-typed';
import "../styles/Presentation.css"


export default function Presentation() {
    return(
        <section className='presentation'>
            <Carousel interval={4000} pause={false} prevIcon="" nextIcon="" className='carousel'>
                    <Carousel.Item>
                        <div className='carousel1 item'>
                            <p className='carousel-p'>Pour contribuer à la protection de l' environnement</p>
                            <div className='carousel-titre'>
                                    <Typed
                                    strings={['Recyclons nos DEEE']}
                                    typeSpeed={60}
                                    loop
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel2 item'>
                            <p className='carousel-p'>En gérant nos DEEE de manière écologique et responsable</p>
                            <div className='carousel-titre'>
                                    <Typed
                                    strings={["Nous prenons soin de notre planète"]}
                                    typeSpeed={60}
                                    loop
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel3 item'>
                            <p className='carousel-p'>Pour limiter l'extraction de nouvelles matières premières</p>
                            <div className='carousel-titre'>
                                    <Typed
                                    strings={["Trions et recyclons nos DEEE"]}
                                    typeSpeed={60}
                                    loop
                                />
                            </div>
                        </div>
                    </Carousel.Item>
            </Carousel>
        </section>
    )
}