import styled from "styled-components";
import "../../styles/ShowMateriel.css"

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
        { value: "Piece", label: "Piece" },
        { value: "Equipement", label: "Equipement" },
      ];

    return(
        <div className="showmateriel">
            <form>
                <div className="dates">
                        <div>
                            <label>Designation</label>
                            <input className="date" type="text"/>
                        </div>
                        <div>
                            <label>Prix Unitaire</label>
                            <input className="date" type="number"/>
                        </div>
                        <div>
                            <label>Quantité Stock</label>
                            <input className="date" type="text" />
                        </div>
                </div>
                <div className="selectcheck">
                    <select className="select">
                        {options.map(item => <option value={item.value}>{item.label}</option>)}
                    </select>
                    <select className="select">
                        {options.map(item => <option value={item.value}>{item.label}</option>)}
                    </select>
                    <div className="check">
                        <span>Publier</span>
                        <div>
                            Oui{parseInt(props.collecter) === 1 ? <input type="radio" value="Oui" name="collecter" checked/> : <input type="radio" value="Oui" name="collecter"/>}
                            Non{parseInt(props.collecter) === 0 ? <input type="radio" value="Non" checked name="collecter"/> : <input type="radio" value="Non" name="collecter"/>}
                        </div>
                    </div>
                </div>
                <div className="textareaGroup">
                    <label>Url Image</label>
                    <textarea  value={props.description}></textarea>
                </div>
                <div className="textareaGroup">
                    <label>Caractéristiques</label>
                    <textarea>{props.detail_traitement}</textarea>
                </div>
                <div>
                    <SubmitButton type="submit">Mettre à jour</SubmitButton>
                    <SubmitButton type="submit">Mettre à jour</SubmitButton>
                </div>
            </form>
        </div>
    )
}