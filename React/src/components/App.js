import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { CartProvider } from "react-use-cart"
import { UserProvider } from "./ContextUser";
import React from "react" ;
import Header from "./Header" ;
import Footer from "./footer" ;
import Login from "./Connexion";
import Register from "./Register" ;
import Accueil from "./Accueil" ;
import Produits from "./Produits";
// import Notifications from "./Notification/Notifications";
// import Apropos from "./Apropos" ;
import ListeTechnicien from "./TrouverTechnicien"
import LieuxDepot from "./LieuxDeDepot";
import EnregistrerDEEE from "./EnregistrerDEEE";
import Reparateur from "./Reparateur" ;
import PresentationLieuDeDepot from "./PresentationLieuDeDepot";
// import EnvoyerMail from "./EnvoyerMail"
// import ChangerMotdepasse from "./ChangerMotdepasse";
// import Blog from "./Blog"
// import PresentationArticle from "./PresentationArticle";
import Contact from "./Contact"
import SuiviDEEE from "./SuiviDEEE";
// import Conversation from "./Conversation";
// import ProfilReparateur from "./ProfilReparateur"
// import TableList from "./Dashbord/Dashbord";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <UserProvider>
          <CartProvider>
              <Header />
              <Routes>
                  <Route path="/" element={<Accueil />} />
                  <Route path="Login" element={<Login />} />
                  <Route path="Inscription" element={<Register />} />
                  <Route path="produits" element={<Produits />} />
                  <Route path="lieux_de_depot" element={<LieuxDepot />} />
                  <Route path="presentationLieu/:id" element={<PresentationLieuDeDepot />} />
                  <Route path="reparateurs" element={<ListeTechnicien />} />
                  <Route path="reparateur" element={<Reparateur />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="enregistrer_DEEEs" element={<EnregistrerDEEE />} />
                  <Route path="suivie" element={<SuiviDEEE />} />
                  {/* 
                  <Route path="A_propos" element={<Apropos />} />
                  <Route path="EnvoyerMail" element={<EnvoyerMail/>} />
                  <Route path="ChangerMotdepasse" element={<ChangerMotdepasse />} />
                  <Route path="dashboard" element={<TableList />} />
                  <Route path="conversation/:id" element={<Conversation />}/>
                  <Route path="Blog" element={<Blog />} />
                  <Route path="presentationArticle/:id" element={<PresentationArticle />} />
                  
                  <Route path="ProfilReparateur/:id" element={<ProfilReparateur />} /> */}
              </Routes>
              <Footer />
          </CartProvider>
        </UserProvider>
      </Router>
    </React.StrictMode>
  )
}

export default App;
