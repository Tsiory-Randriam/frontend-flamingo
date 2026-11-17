import getImageUrl from './Image.jsx';

// alt : texte alternatif décrivant l'image (accessibilité / SEO).
// priority : true pour l'image principale visible au chargement (pas de lazy-loading).
export default function ChoixImage({
  personne,
  status = true,
  alt = '',
  priority = false,
}) {
  const url = status ? getImageUrl(personne) : '';

  // Évite <img src=""> qui déclenche une requête inutile vers la page courante
  if (!url) {
    return <p>Image introuvable</p>;
  }

  return (
    <img
      src={url}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
