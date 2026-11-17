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
                <span>Nos actions</span>
                <p>Trois programmes pour un même <br />objectif : l'épanouissement</p>
            </div>
            <div className="carte">
                <div className="atelier_numerique">
                    <ChoixImage  personne={{ image: photo.atelier }} alt="Atelier numérique"/>
                    <Laptop/>
                    <span>Atelier numérique</span>
                    <p>Initiation au code ,bureautique ,creation de <br />
                    contenu de culture digitale ,animés chaque mois.</p>
                </div>
                <div className="mentorat_confiance">
                    <ChoixImage  personne={{ image: photo.mentorat }} alt="Mentorat et confiance"/>
                    <HeartHandshake />
                    <span>Mentorat & confiance</span>
                    <p>Un accompagnement de proximité : éstime de <br />
                    soi ,santé , orientation et projet de vie.</p>
                </div>
                <div className="leadership">
                    <ChoixImage  personne={{ image: photo.leadership }} alt="Leadership et voix"/>
                    <Sparkles />
                    <span>Leadership & voix</span>
                    <p>Prise de parole ,entrepreneuriat et projets <br />
                    communautaires portés par les filles elles- <br />
                    mêmes.</p>
                </div>
            </div>
            </div>
        </div>
    );
}