
import {
  Mail,
  Phone,
  MapPin,
  AtSign
} from 'lucide-react';

import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">

      {/* Partie gauche */}
      <div className="description">

        <span className="contact-label">CONTACT</span>

        <h2>
          Écrivez-nous, rejoignez le
          <br />
          mouvement
        </h2>

        <p>
          Une question, une envie de bénévolat, un partenariat ou une
          <br />
          inscription ? Un clic suffit pour nous envoyer un mail.
        </p>

        <a
          href="mailto:flamingogirlsforchange@gmail.com"
          className="contact-button"
        >
          <Mail size={16} />
          Envoyer un mail à l'association
        </a>

      </div>

      {/* Partie droite */}
      <div className="lien">

        {/* Téléphone */}
        <a href="tel:0349786780" className="contact-card">
          <div className="contact-icon">
            <Phone size={19} />
          </div>

          <div className="contact-info">
            <span>TÉLÉPHONE</span>
            <p>034 97 867 80</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:flamingogirlsforchange@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">
            <Mail size={19} />
          </div>

          <div className="contact-info">
            <span>E-MAIL</span>
            <p>flamingogirlsforchange@gmail.com</p>
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/FlamingoGirlsForChange"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            <AtSign size={19} />
          </div>

          <div className="contact-info">
            <span>FACEBOOK</span>
            <p>Association Flamingo</p>
          </div>
        </a>

        {/* Adresse */}
        <a href="https://www.google.com/maps/place/Avaratsena/@-19.8730725,47.0287702,21z/data=!4m6!3m5!1s0x21e50f002f0c0f5f:0xc4e5e57e0d9ac314!8m2!3d-19.8730303!4d47.0291109!16s%2Fg%2F11z2hjthmb?hl=en_au&entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D" className="contact-card">
          <div className="contact-icon">
            <MapPin size={19} />
          </div>

          <div className="contact-info">
            <span>ADRESSE</span>
            <p>Mahazoarivo, Antsirabe</p>
          </div>
        </a>

      </div>

    </section>
  );
}
