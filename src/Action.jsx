import ChoixImage from './ChoixImage.jsx';
import './Action.css';
import { Laptop } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export default function Action() {
    const photo = {
        atelier:'girl-can-code.jpg',
        mentorat:'girl-can-code.jpg',
        leadership:'girl-can-code.jpg'
    };
    return(
        <div className="Nos_Action">
            <div className="container-fluid">
            <div className="description">
                <span>Nos Action</span>
                <p>Trois programmes pour un meme <br />objecif : l'épanuissement</p>
            </div>
            <div className="carte">
                <div className="atelier_numerique">
                    <ChoixImage  personne={{image:photo.atelier}} status={true}/>
                    <Laptop/>
                    <span>Atelier numerique</span>
                    <p>Initiation au code ,burautique ,creation de <br />
                    contenu de culture digital ,animés chaque mois.</p>
                </div>
                <div className="mentorat_confiance">
                    <ChoixImage  personne={{image:photo.mentorat}} status={true}/>
                    <HeartHandshake />
                    <span>Mentorat & confiance</span>
                    <p>Un accompagnemenr de proximité : éstime de <br />
                    soi ,santé , orientation et projet de vie.</p>
                </div>
                <div className="leadership">
                    <ChoixImage  personne={{image:photo.leadership}} status={true}/>
                    <Sparkles />
                    <span>leadership & voix</span>
                    <p>Prise de parole ,entrepreunariat et projets <br />
                    communautaires portés par les filles elles- <br />
                    memes.</p>
                </div>
            </div>
            </div>
        </div>
    );
}