import { useState } from "react"
import admin from "../../assets/Premium.jpg"
import "../../styles/dashboard.css"
import Deee from "./Enregistrementdeees"
import Materiels from "./Materiels"

export default function Dashboard()
{

  const [number ,  setnumber] = useState(2)
  return(
    <section className="dashboard">
        <div className="dashboard-header">
            <img src={admin} alt="admin"/>
            <div>
              <p className="name">Charlot DEDJINOU</p>
              <p className="admin">Administrateur ECOTIC</p>
            </div>
        </div>
        <div className="dashboard-body">
            <div className="dashboard-tables">
              <h3>Les tables</h3>
              <div className="table" onClick={() => setnumber(1)}>Utilisateur</div>
              <div className="table" onClick={() => setnumber(2)}>Enregistrement DEEE</div>
              <div className="table" onClick={() => setnumber(3)}>Lieux de Depôt</div>
              <div className="table" onClick={() => setnumber(4)}>Réparateur</div>
              <div className="table" onClick={() => setnumber(5)}>Matériel</div>
              <div className="table" onClick={() => setnumber(6)}>Commande</div>
              <div className="table" onClick={() => setnumber(7)}>Metier</div>
              <div className="table" onClick={() => setnumber(8)}>Ville</div>
              <div className="table" onClick={() => setnumber(9)}>Quartier</div>
            </div>
            <div className="dashboard-table">
                {number === 2 && <Deee />}
                {number === 5 && <Materiels />}
            </div>
        </div>
    </section>
  )
}
