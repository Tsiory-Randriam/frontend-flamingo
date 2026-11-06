
import './Chiffre.css';
export default function Chiffre(){
const chiffre = {
    age: "15-35",
    nombreJeuneFille: "300+",
    nombreAtelier: "12",
    descriptionAssociation: "100%"
};
return(
    <div className="chiffre">
        <div className="age">
            <p> <span> {chiffre.age} </span><br />ans,notre pubic</p>
        </div>
            <div className="nombre-jeune-fille">
                <p><span> {chiffre.nombreJeuneFille} </span><br />jeunes filles accompagnées</p>
            </div>
            <div className="nombre-atelier">
                <p> <span> {chiffre.nombreAtelier} </span><br />ateliers par ans</p>
            </div>
            <div className="description-association">
                <p> <span> {chiffre.descriptionAssociation} </span>  <br />gratuit et associatif</p>
            </div>
        </div>
    );
}