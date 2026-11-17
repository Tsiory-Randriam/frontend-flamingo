import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fieldClass =
  'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';

export default function SendEmail() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  // { type: 'success' | 'error', text: string } | null
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    // Anti-spam : le champ "website" est caché, un humain ne le remplit jamais
    if (form.elements.website?.value) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Variables VITE_EMAILJS_* manquantes (voir .env.example)');
      setStatus({
        type: 'error',
        text: "Le formulaire n'est pas configuré. Merci de nous écrire directement.",
      });
      return;
    }

    setIsSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      form.reset();
      setStatus({ type: 'success', text: 'Message envoyé, merci !' });
    } catch (error) {
      console.error("Erreur d'envoi de l'email :", error);
      setStatus({
        type: 'error',
        text: "Échec de l'envoi. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Écrivez-nous
        </h2>
        <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
          <input
            name="from_name"
            type="text"
            placeholder="Votre nom"
            aria-label="Votre nom"
            required
            maxLength={100}
            autoComplete="name"
            className={fieldClass}
          />
          <input
            name="from_email"
            type="email"
            placeholder="Votre email"
            aria-label="Votre email"
            required
            maxLength={150}
            autoComplete="email"
            className={fieldClass}
          />
          <input
            name="subject"
            type="text"
            placeholder="Objet"
            aria-label="Objet"
            required
            maxLength={150}
            className={fieldClass}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Votre message"
            aria-label="Votre message"
            required
            maxLength={2000}
            className={fieldClass}
          />
          {/* Pot de miel anti-robots (invisible) */}
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
          >
            {isSending ? 'Envoi…' : 'Envoyer'}
          </button>
          <p
            role="status"
            aria-live="polite"
            className={
              status?.type === 'error' ? 'text-red-600' : 'text-green-600'
            }
          >
            {status?.text}
          </p>
        </form>
      </div>
    </div>
  );
}
