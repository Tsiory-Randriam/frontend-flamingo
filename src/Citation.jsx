import ChoixImage from './ChoixImage.jsx';
import './Citation.css';
export default function Citation() {
    const icon = 'AFF (2).png';
    let badge = "Association Flamingo - Girls for Change";
    return(
        <div className="citation">
            <section>
                <div className="icon">
                    <ChoixImage personne={{image:icon}} status={true} />
                </div>
                <div className="texte_citation">
                    <p> " Quand une jeune fille apprend ,c'est toute une <br />communautés qui <span>avance.</span> " </p> 
                </div>
                    <div className="badge">
                {badge}
            </div>
            </section>
        </div>
    );
}