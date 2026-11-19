import {
  FlaskConical,
  Telescope,
  Code2,
  Cpu,
  Calculator,
  Palette,
  Laptop,
  Sparkles,
} from 'lucide-react';
import gccImage from './assets/image/girl-can-code.jpg';

const steamCards = [
  {
    icon: FlaskConical,
    title: 'Sciences & chimie',
    text: 'Manipulation du microscope et expériences chimiques encadrées avec du matériel de laboratoire.',
  },
  {
    icon: Telescope,
    title: 'Astronomie',
    text: "Séances d'observation ouvertes au grand public, en partenariat avec l'association Haikintana.",
  },
  {
    icon: Code2,
    title: 'Tech & codage',
    text: "Ateliers d'apprentissage et d'initiation au codage pour les collégiens et lycéens.",
  },
  {
    icon: Cpu,
    title: 'Ingénierie & robotique',
    text: 'Découverte de la robotique et programmation en langage C.',
  },
  {
    icon: Calculator,
    title: 'Mathématiques',
    text: "Un concours de mathématiques pour stimuler la logique et l'esprit de compétition.",
  },
  {
    icon: Palette,
    title: 'Arts',
    text: 'Exposition d\u2019œuvres et concours de dessin pour célébrer la créativité des participants.',
  },
];

const gccItems = [
  {
    icon: Laptop,
    title: 'Informatique & bureautique',
    text: "Maîtriser les bases de l'ordinateur et les outils bureautiques du quotidien.",
  },
  {
    icon: Palette,
    title: 'Design graphique & UX/UI',
    text: 'Créer des visuels et concevoir des interfaces utiles et esthétiques.',
  },
  {
    icon: Code2,
    title: 'Code & programmation',
    text: 'Apprendre à coder pas à pas et donner vie à ses propres projets.',
  },
  {
    icon: Sparkles,
    title: 'Formation de 3 mois',
    text: "Un parcours complet dans un environnement d'apprentissage, de partage et de créativité.",
  },
];

function Badge({ children }) {
  return (
    <span className="mb-5 inline-block rounded-full border border-pink-500/40 bg-pink-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#ff3d81]">
      {children}
    </span>
  );
}

function IconBubble({ icon: Icon, className = 'h-7 w-7' }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff3d81,#ff5c9a)] text-white ${className}`}
    >
      <Icon size={14} />
    </div>
  );
}

export default function Steaminist() {
  return (
    <section
      id="steaminist"
      className="bg-[radial-gradient(circle_at_80%_0%,#231b1e_0%,#150f11_60%)] px-4 py-16 font-['Nunito',sans-serif] text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* ===== STEAMINIST ===== */}
        <Badge>Projet réalisé · Décembre 2023</Badge>

        <h2 className="mb-4 font-['Baloo_2',sans-serif] text-[1.6rem] font-bold leading-tight sm:text-3xl">
          <span className="text-[#ff3d81]">Steaminist</span> : la science et
          l'art à portée des jeunes
        </h2>

        <p className="mb-8 max-w-[850px] text-sm leading-7 text-[#b5adb0]">
          Porté par l'Association Flamingo en décembre 2023, Steaminist a réuni
          des élèves de collège et de lycée autour d'un parcours découverte
          mêlant sciences, technologie, ingénierie, mathématiques et arts — pour
          éveiller les vocations et montrer que chaque discipline est
          accessible à toutes et à tous.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steamCards.map(({ icon, title, text }) => (
            <article
              key={title}
              className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
            >
              <div className="mb-4">
                <IconBubble icon={icon} className="h-9 w-9" />
              </div>
              <h3 className="mb-2 font-['Baloo_2',sans-serif] text-[15px] font-semibold">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-[#a39b9e]">{text}</p>
            </article>
          ))}
        </div>

        {/* Séparateur */}
        <hr className="my-16 border-0 border-t border-white/10" />

        {/* ===== GIRLS CAN CODE ===== */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Badge>Programme · Girls Can Code 2024</Badge>

            <h2 className="mb-4 font-['Baloo_2',sans-serif] text-[1.6rem] font-bold leading-tight sm:text-3xl">
              <span className="text-[#ff3d81]">Girls Can Code</span> : 3 mois
              pour construire ton avenir numérique
            </h2>

            <p className="mb-6 text-sm leading-7 text-[#b5adb0]">
              Girls Can Code (GCC) est le programme phare de l'Association
              Flamingo destiné aux jeunes filles de 15 à 25 ans. Pendant trois
              mois, les participantes découvrent le monde du numérique et
              développent de nouvelles compétences dans un environnement
              d'apprentissage, de partage et de créativité.
            </p>

            <ul className="space-y-4">
              {gccItems.map(({ icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <IconBubble icon={icon} className="h-8 w-8" />
                  <div>
                    <h3 className="text-[13px] font-bold">{title}</h3>
                    <p className="text-xs leading-relaxed text-[#a39b9e]">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image avec halo rose */}
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(255,61,129,0.3)]">
            <img
              src={gccImage}
              alt="Participantes du programme Girls Can Code 2024 autour d'un ordinateur"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}