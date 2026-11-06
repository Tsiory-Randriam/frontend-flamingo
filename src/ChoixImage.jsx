import getImageUrl  from './Image.jsx';
export default function ChoixImage({personne,status}) {
        if (status)
        {
            return(
                <img src={getImageUrl(personne)} alt={personne} />
            );
        }
            return (
                <p>Image introuvable</p>
            )
}