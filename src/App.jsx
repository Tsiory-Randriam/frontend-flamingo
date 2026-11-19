import { Mail } from 'lucide-react';
import './App.css';
import Hero from './Hero.jsx';
import Chiffre from './Chiffre.jsx';
import ChoixImage from './ChoixImage.jsx';
import A_Propos from './A_propos.jsx';
import Action from './Action.jsx';
import Citation from './Citation.jsx';
import SendEmail from './components/SendEmail.jsx';
import Contact from './Contact.jsx';
import Galerie from './Galerie.jsx';
import CodHerBus from './CodHerBus.jsx';
import Steaminist from './Steaminist.jsx';

export default function App() {
  return (
    <>
      <nav className="container-fluid">
        <div className="logo">
          <ChoixImage
            personne={{ image: 'AFF (2).png' }}
            alt="Logo de l'association Flamingo"
            priority
          />
          <p>
            Association <span>Flamingo </span>
          </p>
        </div>
        <ul>
          <li>
            <a href="#apropos">A propos </a>
          </li>
          <li>
            <a href="#nos_action">Nos actions</a>
          </li>
          <li>
            <a href="#">codHer-Bus</a>
          </li>
          <li>
            <a href="#">Galerie</a>
          </li>
          <li>
            <a href="#apropos">Valeurs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="note">
          <a href="#contact">
            <Mail size={14} />
            <span style={{ margin: '0 0.5rem' }}> nous écrire </span>
          </a>
        </div>
      </nav>

      <article>
        <div id="Hero">
          <Hero />
        </div>
        <div id="chiffres">
          <Chiffre />
        </div>
        <div id="apropos">
          <A_Propos />
        </div>
        <div id="nos_action">
          <Action />
        </div>
        <div id="citation">
          <Citation />
        </div>
        <div id="CodherBus">
          <CodHerBus />
        </div>
        <div id="steamnist">
          <Steaminist />
        </div>
        <div id="galerie">
          <Galerie />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="contact" className="contact">
          <SendEmail />
        </div>
      </article>
    </>
  );
}
