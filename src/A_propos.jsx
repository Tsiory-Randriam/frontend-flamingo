import './Apropos.css';
export default function A_Propos(){
    return(
        <div className="aPropos">
            <div className="presentation">
                <span>A PROPOS</span>
                <div id="description">
                    <p>Une association née pour faire <br />briller les filles </p>
                </div>
                <div id="texte">
                    <p>A Mahazoazrivo Antsirabe , Flamingo réunit des jeunes filles de 15 à 25 <br />
                    ans autour d'un meme elan : apprendre , oser et construire .Nous croyons <br />
                    que l'acces au numerique d'aujourd'hui la clés de l'autonomie et de <br />
                    l'emancipation. </p>

                    <p>Nos bénévoles et mentores proposent des ateliers gratuits , un <br />
                    accompagnement personnalisé et des projet concréts qui valorisent les <br />
                    talents de chacune</p>
                </div>
            </div>
            <div className="valeur">
            <div className="epanuisement">
                <span>epanuissement</span>
                <p>Chaque jeune fille merite un espace sur pour garantir ,apprende et rever <br />grand.</p>
            </div>
            <div className="Tech-serorite">
                <div className="Technologie">
                    <span>Techologie</span>
                    <p>Le numerique est une levier <br />d'autonomie : nous le rendons <br />accessible a tous .</p>
                </div>
                <div className="Sororite">
                    <span>Sororité</span>
                    <p>Un réseau d'entraide durable <br />entre les filles d'Antsirabe et <br />d'ailleurs</p>
                </div>
            </div>
            </div>
        </div>

    );

}