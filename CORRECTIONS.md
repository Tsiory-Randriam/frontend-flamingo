# Audit & corrections — mon-premier-react

## Failles de sécurité
| Gravité | Problème | Correction |
|---|---|---|
| Haute | `src/.env` : non ignoré par git (un `git add .` publierait les clés EmailJS) | `.env` déplacé à la racine, ajouté à `.gitignore`, `.env.example` fourni |
| Haute | Le zip contient `.env` **et** `node_modules` | Ne plus partager le projet avec ces dossiers |
| Moyenne | Formulaire sans anti-spam, sans limite de taille | Honeypot, `required`, `maxLength`, validation e-mail |
| Moyenne | Aucun en-tête de sécurité sur Netlify | CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy (`netlify.toml`) |
| Info | Clés EmailJS visibles côté navigateur (inévitable) | Dans le dashboard EmailJS : restreindre aux domaines autorisés, activer reCAPTCHA, limiter le quota. **Régénérer les clés** si le zip a été partagé |

## Bugs corrigés
1. `.env` dans `src/` : Vite ne le lit pas → variables `undefined`, envoi d'e-mail impossible.
2. `SendEmail` : `type='email'` sur un `<textarea>`, aucun `required`, messages en anglais, `alert()` bloquants, pas de `finally`.
3. `CodHerBus.jsx` : image `codHerBus.web` → `codHerBus.webp`.
4. `App.jsx` : `href="mail"` (lien cassé) → `#contact` ; `#login` inexistant → `#apropos` ; ancre `#contact` créée ; prop invalide `margin` sur l'icône ; `<section>` vide supprimée.
5. `ChoixImage` / `Image.jsx` : `alt` = nom du fichier (accessibilité), `<img src="">` si image introuvable, pas de lazy-loading.
6. `App.css` : `@import 'tailwindcss'` en double ; `* {margin:0}` non-layered qui écrasait les utilitaires Tailwind ; `ul/li` globaux → limités à `nav`.
7. `.chiffre` appliquée deux fois (wrapper `App` + composant) → wrapper renommé `#chiffres`.
8. Classe `.citation` de CodHerBus en collision avec `Citation.css` → `.codherbus-citation`.
9. Boutons du Hero sans action → défilent vers `#contact` / `#nos_action`.
10. `index.html` : `lang="en"` → `fr`, titre et description.
11. Fins de ligne mixtes CRLF/LF (cause des diffs git géants) → LF + `.gitattributes`.
12. Fichiers vides/inutilisés supprimés : `header.jsx`, `ListeImage.jsx`, `Contact.jsx`.
13. ~25 fautes d'orthographe corrigées dans les textes.

## À décider / vérifier (non modifié)
- **Incohérence** : « 15-35 ans » (Chiffre) vs « 15 à 25 ans » (À propos).
- Texte **Lorem ipsum** dans le Hero.
- Police `'Island-Moments'` jamais chargée (le vrai nom Google Fonts est « Island Moments ») : le navigateur utilise `cursive` par défaut.
- « Mahazoazrivo » : probablement « Mahazoarivo ».
- Liens **codHer-Bus** et **Galerie** pointent vers `#` ; `CodHerBus.jsx` n'est pas affiché dans `App` (son CSS est vide).
- Même image `girl-can-code.jpg` pour les 3 cartes d'actions ; 10 images `AF*.png` inutilisées (~1,7 Mo dans `dist`).
- Fichiers d'images avec espaces/parenthèses (`AFF (2).png`) : renommer en `aff-2.png`.
- Navigation sans menu mobile (les liens se replient simplement).
- Lancer `npm audit` (non faisable ici : pas de réseau).

## Vérifications
- ESLint : 0 erreur après corrections.
- Build Vite non exécutable ici (les `node_modules` fournis sont pour Windows : binding `rolldown` Linux absent). Faire `npm ci && npm run build` chez vous.
