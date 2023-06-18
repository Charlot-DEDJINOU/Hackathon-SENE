import Presentation from "./Presentation"
import About from './About.jsx'
import OurObjective from './OurObjective'
import OurService from './OurService'
import OurDepotPlace from './OurDepotPlace.js'
import OcasionAmenities from './OcasionAmenities.js'
import Newsletter from './Newsletter.js'
import React from "react"

function Accueil() {

  return (
    <React.StrictMode>
      <Presentation />
      <About />
      <OurObjective />
      <OurService />
      <OurDepotPlace />
      <OcasionAmenities />
      <Newsletter /> 
    </React.StrictMode>
  )
}
export default Accueil