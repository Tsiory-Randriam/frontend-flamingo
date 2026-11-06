import ChoixImage from './ChoixImage.jsx';
import { ArrowRight } from 'lucide-react';

export default function CodHerBus(){
    let badge_codherbus = "NOUVEAU PROJET . 2026";
    let image_codherbus = "codHerBus.webp";
    return (
        <div className="codHerBus">
            <div className="badge-image">
                <div className="badge">
                    <span> {badge_codherbus}  </span>
                </div>
                <div className="image">
                    <ChoixImage personne={{ image: image_codherbus }} status={true} />
                </div>
            </div>
            <div className="description">
                <div className="title">
                    <p><span>CodHer-Bus</span> : la salle de <br />formation 
                    qui vient jusqu'à elles</p>
                </div>
                <div className="texte">
                    <p>CodHer-Bus est une initiative éducative itinérante qui utilise un bus <br />
                    aménagé comme salle de formatio mobile. Nous allons intervernir dans <br />
                    des zones rurales et semi-rurales ou les jeunes filles ont trés peu d'acces <br />aux ordinateures
                    , à Internet et aux formations en technologies .</p>
                </div>
                <div className="citation">
                    Apprenre . coder . Innover .Partout
                </div>
                <div className="soutenier">
                    <button>Soutenir CodHer-Bus <ArrowRight /> </button>
                </div>
            </div>
        </div>
    );
}