import { Bus, MapPin, Wifi, Users, ArrowRight } from 'lucide-react';


const features = [
  {
    icon: Bus,
    title: 'Une salle de formation mobile',
    text: 'Un bus aménagé qui se transforme en salle informatique équipée, prête à sillonner les routes.',
  },
  {
    icon: MapPin,
    title: 'Zones rurales & semi-rurales',
    text: "Nous allons là où les jeunes filles n'ont ni ordinateurs, ni Internet, ni formations en technologies.",
  },
  {
    icon: Wifi,
    title: 'Connexion & équipement',
    text: 'Ordinateurs, connexion et supports pédagogiques embarqués pour apprendre partout.',
  },
  {
    icon: Users,
    title: 'Apprendre · Coder · Innover',
    text: "Un parcours d'initiation encadré par des formatrices et mentores de Flamingo.",
  },
];

export default function CodHerBus() {
  return (
    <section
      id="codher-bus"
      aria-labelledby="cb-title"
      className="bg-[radial-gradient(circle_at_20%_0%,#231b1e_0%,#171313_60%)] px-4 py-16 font-['Nunito',sans-serif] text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Badge */}
        <span className="mb-5 inline-block rounded-full border border-pink-500/40 bg-pink-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ff3d81]">
          Nouveau projet · 2026
        </span>

        {/* Hero : logo + texte */}
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Carte logo */}
          <div className="flex min-h-[240px] items-center justify-center rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <img
              src={'src/assets/image/girl-can-code.jpg'}
              alt="Logo CodHer-Bus"
              className="h-auto w-full max-w-full object-contain"
            />
          </div>

          {/* Contenu */}
          <div>
            <h2
              id="cb-title"
              className="mb-4 font-['Baloo_2',sans-serif] text-[1.6rem] font-bold leading-tight sm:text-3xl"
            >
              <span className="text-[#ff3d81]">CodHer-Bus</span> : la salle de
              formation qui vient jusqu'à elles
            </h2>

            <p className="mb-4 text-sm leading-7 text-[#b5adb0]">
              CodHer-Bus est une initiative éducative itinérante qui utilise un
              bus aménagé comme salle de formation mobile. Nous allons
              intervenir dans des zones rurales et semi-rurales où les jeunes
              filles ont très peu d'accès aux ordinateurs, à Internet et aux
              formations en technologies.
            </p>

            <p className="mb-6 text-sm font-bold text-[#ff3d81]">
              Apprendre · Coder · Innover · Partout
            </p>

            <a
              href="#soutenir"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ff3d81,#ff5c9a)] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,61,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,61,129,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Soutenir CodHer-Bus <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Cartes */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
            >
              <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ff3d81,#ff5c9a)] text-white">
                <Icon size={18} />
              </div>
              <h3 className="mb-2 font-['Baloo_2',sans-serif] text-[15px] font-semibold leading-snug">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-[#a39b9e]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}