import Presentation from "./Presentation"
import About from './About.jsx'
import OurObjective from './OurObjective'
import OurService from './OurService'
import OurDepotPlace from './OurDepotPlace'
import OcasionAmenities from './OcasionAmenities'
import Newsletter from './Newsletter'
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