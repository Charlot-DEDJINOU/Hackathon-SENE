import styled from "styled-components";
const SubmitButton = styled.button`
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 15px;
  height: 2rem;
  width: 10rem;
  background-color: rgb(0, 163, 77);
  align-self : flex-end ;
`;

export default function FormDeee(props)
{
    const options = [
        { value: "", label: "Type de Gestion" },
        { value: "Récycler", label: "Récycler" },
        { value: "Réutiliser", label: "Réutiliser" },
        { value: "Réparer", label: "Réparer" },
        { value: "Réduire", label: "Réduire" }
      ];

    return(
        <div className="Deee">
            <form>
                <div className="textareaGroup">
                    <label>Detail</label>
                    <textarea  value={props.description}></textarea>
                </div>
                <div className="textareaGroup">
                    <label>Detail Traitement</label>
                    <textarea>{props.detail_traitement}</textarea>
                </div>
                <div className="selectcheck">
                    <select className="select">
                        {options.map(item => <option value={item.value}>{item.label}</option>)}
                    </select>
                    <div className="check">
                        <span>Collecter</span>
                        <div>
                            Oui{parseInt(props.collecter) === 1 ? <input type="radio" value="Oui" name="collecter" checked/> : <input type="radio" value="Oui" name="collecter"/>}
                            Non{parseInt(props.collecter) === 0 ? <input type="radio" value="Non" checked name="collecter"/> : <input type="radio" value="Non" name="collecter"/>}
                        </div>
                    </div>
                    <div className="check">
                        <span>Traiter</span>
                        <div>
                            Oui{parseInt(props.traiter) === 1 ? <input type="radio" value="Oui" checked name="traiter"/> : <input type="radio" value="Oui" name="traiter"/>}
                            Non{parseInt(props.traiter) === 0 ? <input type="radio" value="Non" checked name="traiter"/> : <input type="radio" value="Non" name="traiter"/>}
                        </div>
                    </div>
                </div>
                <div className="dates">
                        <div>
                            <span>Date d'enrégistrement</span>
                            <span className="date">{props.date_enregistrement}</span>
                        </div>
                        <div>
                            <span>Date de collecte</span>
                            <span className="date">{props.date_collecte === null ? "Pas encore collecter" : props.date_collecte}</span>
                        </div>
                        <div>
                            <span>Date de traitement</span>
                            <span className="date">{props.date_traitement === null ? "Pas encore collecter" : props.date_traitement}</span>
                        </div>
                    </div>
                <SubmitButton type="submit">Mettre à jour</SubmitButton>
            </form>
        </div>
    )
}