import {Mail} from 'lucide-react';
import './App.css';
import Hero from './Hero.jsx';
import Chiffre from './Chiffre.jsx';
import ChoixImage from './ChoixImage.jsx';
import A_Propos from './A_propos.jsx';
import Action from './Action.jsx';
import Citation from './Citation.jsx';

export default function App() {
  //const mes_images = [
    //{ image: 'AFF (2).png', status: true },
    //{ image: 'AFF (3).png', status: true },
    //{ image: 'AFF (4).png', status: true },
    //{ image: 'AFF (5).png', status: true },
    //{ image: 'AFF (1).png', status: true },
  //];
  //const listeImages = mes_images.map(personne=> (
    //<ChoixImage personne={personne} status={true} />
  //));
  
  return (
    <>

      <nav className='container-fluid'>
        <div className="logo">
          <ChoixImage 
              personne={{ image: 'AFF (2).png' }}
              status={true}
           />
          <p>Association <span>Flamingo </span></p>
        </div>
        <ul>

          <li><a href="#apropos">A propos </a></li>
          <li><a href="#nos_action">Nos actions</a></li>
          <li><a href="/composante">codHer-Bus</a></li>
          <li><a href="/login">Galerie</a></li>
          <li><a href="/login">Valeurs</a></li>
          <li><a href="">Contact</a></li>

        </ul>
        <div className="note">
          <a href="mail"> <Mail size={14} margin={0}  /> <span style={{ margin: '0 0.5rem 0 0.5rem' }}> nous ecrire </span></a>
        </div>
      </nav>

      <section>
      </section>
    <article>
      <div id="Hero">
        <Hero />
      </div>
      <div className="chiffre">
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
    </article>
    </>

  );
}

