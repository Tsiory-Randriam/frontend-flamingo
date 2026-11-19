import SliderModule from 'react-slick';

// Compatible avec toutes les configurations (Vite, CRA, Webpack)
const Slider = SliderModule.default || SliderModule;
import girlImage from './assets/image/girl-can-code.jpg';
import './Galerie.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  { id: 1, description: ' Girls can code ', src: girlImage },
  { id: 2, description: 'Actions solidaires ', src: girlImage },
  { id: 3, description: 'code the change', src: girlImage },
  { id: 4, description: 'Formation numérique', src: girlImage },
  { id: 5, description: 'Hackathon', src: girlImage },
  { id: 6, description: 'Remise de certificats', src: girlImage },
];

// Désactive l'autoplay si l'utilisateur préfère moins d'animations
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: !prefersReducedMotion,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
    },
  ],
};

function Galerie() {
  return (
    <section
      id="galerie"
      aria-labelledby="galerie-title"
      className="galerie w-full overflow-hidden white px-5 py-20 sm:px-8 lg:px-16"
    >
      {/* En-tête */}
      <div className="mx-auto mb-14 max-w-7xl">
        <span className="mb-3 block text-sm font-bold uppercase tracking-[4px] text-pink-500" style={{fontSize:'13px'}}>
          Galerie
        </span>

        <h2 id="galerie-title" className="text-3xl font-bold " style={{color:'darck',fontFamily:'Island-Moments'}}>
          Des moments qui nous rassemblent
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400 sm:text-base">
          
        </p>
      </div>

      {/* Carrousel */}
      <div className="mx-auto max-w-7xl px-0">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id} className="px-3 pb-8">
              <figure className="group relative m-0 overflow-hidden rounded-2xl border border-white/10 bg-[#241d1f] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-pink-500/10">
                <div className="relative h-64 overflow-hidden sm:h-72" style={{ border:'0px solid transparent' }}>
                  <img
                    src={d.src}
                    alt={d.description}
                    draggable="false"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                  <figcaption className="absolute bottom-0 left-0 w-full p-5">
                    {/* translate seulement sur appareils avec hover */}
                    <p className="text-lg font-semibold text-white transition-all duration-300 [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:group-hover:translate-y-0">
                      {d.description}
                    </p>
                    <div className="mt-2 h-1 w-10 rounded-full bg-pink-500 transition-all duration-300 group-hover:w-20" />
                  </figcaption>
                </div>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Galerie;