import back from "../assets/back.jpg"
import { useForm } from "react-hook-form";

export default function MettreEnVente(){

    const { register, handleSubmit , formState: { errors } } = useForm();

    const onSubmitInscription = data => {
        alert(errors.mail) ;
    }

    return(
        <section className="login">
            <img src={back} alt="back" className="image"/>
            <div className="inscription enregistrer">
                <h3>METTRE EN VENTE</h3>
                <form onSubmit={handleSubmit(onSubmitInscription)} style={{height: "85%"}} encType="multipart/form-data">
                    <div className="FormGroup">
                        <label for="prenom">Nom equipement</label>
                        <input type="text" id="prenom"/>
                    </div>
                    <div className="InputGroup">
                        <div className="FormGroup">
                            <label for="Nom">Etat</label>
                            <input type="text" id="nom"/>
                        </div>
                        <div className="FormGroup">
                            <label for="prenom">Prix</label>
                            <input type="text" id="prenom"/>
                        </div>
                    </div>
                    <div className="FormGroup">
                        <label for="Email">Type DEEEs</label>
                        <input type="text" id="Email" {...register("lastName")}/>
                    </div>
                    <div className="FormGroup">
                        <label for="Email">Description</label>
                        <textarea></textarea>
                    </div>
                    <div className="inputfile">
                        <label for="Nom">Etat</label>
                        <input type="file" multiple accept="image/*" />
                    </div>
                    <div className="CheckGroup">
                        <input type="checkbox" />
                        <span>Cochez ici</span>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </section>
    )
}