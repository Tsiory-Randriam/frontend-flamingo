// Vite ne peut pas deviner un chemin construit dynamiquement ('src/assets/image/' + nom).
// import.meta.glob liste toutes les images au moment du build et leur donne
// la bonne URL finale (avec hash) dans le dossier dist.
const images = import.meta.glob('./assets/image/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export default function getImageUrl(person) {
  const nom = person?.image;
  return images['./assets/image/' + nom] ?? '';
}
