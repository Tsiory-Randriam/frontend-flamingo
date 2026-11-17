import ChoixImage from './ChoixImage.jsx';
import { ArrowRight } from 'lucide-react';
import './CodHerBus.css';

export default function CodHerBus(){
    const badge_codherbus = "NOUVEAU PROJET . 2026";
    const image_codherbus = "codHerBus.webp";
    return (
        <div className="codHerBus">
            <div className="badge-image">
                <div className="badge">
                    <span> {badge_codherbus}  </span>
                </div>
                <div className="image">
                    <ChoixImage personne={{ image: image_codherbus }} alt="Le bus CodHer-Bus, salle de formation mobile" />
                </div>
            </div>
            <div className="description">
                <div className="title">
                    <p><span>CodHer-Bus</span> : la salle de <br />formation 
                    qui vient jusqu'à elles</p>
                </div>
                <div className="texte">
                    <p>CodHer-Bus est une initiative éducative itinérante qui utilise un bus <br />
                    aménagé comme salle de formation mobile. Nous allons intervenir dans <br />
                    des zones rurales et semi-rurales où les jeunes filles ont très peu d'accès <br />aux ordinateurs
                    , à Internet et aux formations en technologies .</p>
                </div>
                <div className="codherbus-citation">
                    Apprendre. Coder. Innover. Partout.
                </div>
                <div className="soutenier">
                    <button>Soutenir CodHer-Bus <ArrowRight /> </button>
                </div>
            </div>
        </div>
    );
}