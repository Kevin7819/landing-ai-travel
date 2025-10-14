import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageSets = [
    {
      desktop: '/images/img_a.webp',
      tablet: '/images/img_a.webp', 
      mobile: '/images/img_a.webp'
    },
    {
      desktop: '/images/img_b.webp',
      tablet: '/images/img_b.webp',
      mobile: '/images/img_b.webp'
    },
    {
      desktop: '/images/img_c.webp',
      tablet: '/images/img_c.webp',
      mobile: '/images/img_c.webp'
    },
    {
      desktop: '/images/img_d.webp',
      tablet: '/images/img_d.webp',
      mobile: '/images/img_d.webp'
    },
    {
      desktop: '/images/img_e.webp',
      tablet: '/images/img_e.webp',
      mobile: '/images/img_e.webp'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imageSets.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white">
      
      {/* Background Images Carrusel*/}
      <div className="absolute inset-0 z-0 mx-8 my-16 rounded-2xl overflow-hidden"> 
        {/* Overlay muy ligero */}
        <div className="absolute inset-0 bg-white/15 z-20"></div>
        
        {/* Imágenes del carrusel*/}
        {imageSets.map((imageSet, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <picture>
              <source 
                media="(min-width: 992px)" 
                srcSet={`${imageSet.desktop} 1x, ${imageSet.desktop} 2x`}
              />
              <source 
                media="(min-width: 744px)" 
                srcSet={`${imageSet.tablet} 1x, ${imageSet.tablet} 2x`}
              />
              <source 
                media="(min-width: 0px)" 
                srcSet={`${imageSet.mobile} 1x, ${imageSet.mobile} 2x`}
              />
              <img
                src={imageSet.desktop}
                alt="Destino de viaje"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
                sizes="100vw"
              />
            </picture>
          </div>
        ))}
        
        {/* Gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-purple-50/10 z-10"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-16 right-16 w-60 h-60 bg-blue-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-72 h-72 bg-purple-200/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content - Añadido mt-8 para bajar todo el contenido */}
      <div className="container mx-auto px-4 relative z-20 pb-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge con mejor contraste */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/30 rounded-full px-3 py-1.5 mb-8 shadow-lg">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-xs">IA activa • Analizando precios en tiempo real</span>
          </div>

          {/* Main Heading - Aumentado el tamaño de texto y añadido más margen superior */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg mt-4">
            Viaja más,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg mt-2 pb-2">
              paga menos
            </span>
          </h1>

          {/* Subtitle con mejor contraste - Texto un poco más grande */}
          <p className="text-lg md:text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Tu asistente de IA personal para encontrar las mejores ofertas de vuelos y hoteles
          </p>

          {/* Search Form con glass effect - Un poco más grande */}
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/30 p-2 max-w-xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Where */}
              <div className="flex-1">
                <div className="px-3 py-2.5 text-left cursor-pointer hover:bg-gray-50/50 rounded-lg transition-colors">
                  <div className="text-xs font-medium text-gray-600 mb-0.5">Dónde</div>
                  <div className="text-gray-900 font-medium text-sm">Buscar destino</div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex-1">
                <div className="px-3 py-2.5 text-left cursor-pointer hover:bg-gray-50/50 rounded-lg transition-colors">
                  <div className="text-xs font-medium text-gray-600 mb-0.5">Fechas</div>
                  <div className="text-gray-900 font-medium text-sm">Agregar fechas</div>
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1">
                <div className="px-3 py-2.5 text-left cursor-pointer hover:bg-gray-50/50 rounded-lg transition-colors">
                  <div className="text-xs font-medium text-gray-600 mb-0.5">Viajeros</div>
                  <div className="text-gray-900 font-medium text-sm">2 personas</div>
                </div>
              </div>

              {/* Search Button - Un poco más grande */}
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Buscar
              </button>
            </div>
          </div>

          {/* Features Grid - Iconos un poco más grandes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-4">
            {[
              {
                title: "Precios precisos",
                description: "IA que predice cuándo comprar"
              },
              {
                title: "Ahorro garantizado",
                description: "Hasta 40% más económico"
              },
              {
                title: "Alertas instantáneas",
                description: "Notificaciones en tiempo real"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-md border border-white/30 rounded-lg p-4 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Iconos SVG - Aumentados a w-9 h-9 */}
                <div className="flex justify-center mb-3">
                  {index === 0 && (
                    <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-9 h-9 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{feature.title}</h3>
                <p className="text-gray-700 text-xs font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge - Un poco más grande */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
            {/* Primer badge - usuarios */}
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white/30 w-full sm:w-auto justify-center transform hover:scale-105 transition-transform">
              <div className="flex -space-x-1.5 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                +5,000 viajeros confían
              </span>
            </div>

            {/* Separador - solo visible en desktop */}
            <div className="h-4 w-px bg-gray-400/60 hidden sm:block"></div>

            {/* Segundo badge - rating */}
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-white/30 w-full sm:w-auto justify-center transform hover:scale-105 transition-transform">
              <div className="flex flex-shrink-0">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-500 text-sm">★</span> 
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                4.9/5 Trustpilot
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Un poco más grande */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center backdrop-blur-sm bg-white/30">
          <div className="w-1 h-2 bg-gray-600 rounded-full mt-1.5"></div>
        </div>
      </div>
    </section>
  );
}