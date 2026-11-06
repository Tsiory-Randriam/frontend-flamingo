import './Hero.css';
import ChoixImage from './ChoixImage.jsx';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="Hero">
            <div className="description">
                <div className="badge">
                    <span> GIRLS FOR CHANGE - ANTSIRABE </span>
                </div>
                <div className="titre">
                    <p>Les jeunes fille au <br />coeur de la <br /> <span>révolution <br />numérique</span></p>
                </div>
                <div className="texte">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Voluptates, odit voluptatem! Quisquam quam, nemo fuga quae <br /> recusandae labore doloremque obcaecati odit dolores <br />    </p>
                </div>
                <div className="bouton">
                    <div className="mail">
                        <button>Envoyer un mail <ArrowRight style={{ marginLeft: '0.5rem', fontSize: '12px' }} /></button>
                    </div>
                    <div className="action">
                        <button>Decouvrir nos actions </button>
                    </div>
                </div>
            </div>
            <div className="photo">
                <ChoixImage
                    personne={{image : 'girl-can-code.jpg'}}
                    status={true}
                />
            </div>
        </div>

    );
}