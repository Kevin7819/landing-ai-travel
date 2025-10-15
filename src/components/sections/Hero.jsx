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
    <section className="relative min-h-screen md:min-h-[85vh] flex items-center justify-center bg-gray-50">
      
      {/* Background Images Carrusel*/}
      <div className="absolute inset-0 z-0 mx-4 my-8 md:mx-8 md:my-16 rounded-xl md:rounded-2xl overflow-hidden"> 
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-50/20 z-20"></div>
        
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
                media="(min-width: 1024px)" 
                srcSet={`${imageSet.desktop} 1x, ${imageSet.desktop} 2x`}
              />
              <source 
                media="(min-width: 768px)" 
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
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30 z-10"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-10 right-10 md:top-16 md:right-16 w-40 h-40 md:w-60 md:h-60 bg-blue-200/20 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 w-48 h-48 md:w-72 md:h-72 bg-purple-200/20 rounded-full blur-2xl md:blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-8 md:pb-4 mt-12 md:mt-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-100 rounded-full px-4 py-2 mb-8 md:mb-8 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-sm">IA activa • Analizando precios en tiempo real</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 md:mb-6 leading-tight drop-shadow-sm">
            Viaja más,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm mt-2 md:mt-2 pb-1 md:pb-2">
              paga menos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 md:mb-12 max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-medium">
            Tu asistente de IA personal para encontrar las mejores ofertas de vuelos y hoteles
          </p>

          {/* Search Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl md:rounded-xl shadow-xl border border-blue-100 p-3 md:p-2 max-w-4xl mx-auto mb-12 md:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-2">
              {/* Where */}
              <div className="flex-1">
                <div className="px-4 py-3 md:px-3 md:py-2.5 text-left cursor-pointer hover:bg-blue-50/50 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                  <div className="text-sm md:text-xs font-medium text-gray-600 mb-1">Dónde</div>
                  <div className="text-gray-900 font-medium text-base md:text-sm">Buscar destino</div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex-1">
                <div className="px-4 py-3 md:px-3 md:py-2.5 text-left cursor-pointer hover:bg-blue-50/50 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                  <div className="text-sm md:text-xs font-medium text-gray-600 mb-1">Fechas</div>
                  <div className="text-gray-900 font-medium text-base md:text-sm">Agregar fechas</div>
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1">
                <div className="px-4 py-3 md:px-3 md:py-2.5 text-left cursor-pointer hover:bg-blue-50/50 rounded-lg transition-colors border border-transparent hover:border-blue-200">
                  <div className="text-sm md:text-xs font-medium text-gray-600 mb-1">Viajeros</div>
                  <div className="text-gray-900 font-medium text-base md:text-sm">2 personas</div>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-4 md:px-6 md:py-3 rounded-lg font-semibold text-base md:text-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mt-2 sm:mt-0">
                Buscar
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 max-w-6xl mx-auto mb-6 md:mb-4">
            {[
              {
                title: "Precios precisos",
                description: "IA que predice cuándo comprar",
                icon: (
                  <svg className="w-10 h-10 md:w-9 md:h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Ahorro garantizado",
                description: "Hasta 40% más económico",
                icon: (
                  <svg className="w-10 h-10 md:w-9 md:h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                )
              },
              {
                title: "Alertas instantáneas",
                description: "Notificaciones en tiempo real",
                icon: (
                  <svg className="w-10 h-10 md:w-9 md:h-9 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-md border border-blue-100 rounded-xl md:rounded-lg p-6 md:p-4 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4 md:mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 md:mb-2 text-lg md:text-base">{feature.title}</h3>
                <p className="text-gray-700 text-sm md:text-xs font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-3 md:gap-4 mt-8 md:mt-6">
            {/* Primer badge - usuarios */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 md:px-4 md:py-2.5 rounded-full shadow-lg border border-blue-100 w-full sm:w-auto justify-center transform hover:scale-105 transition-transform">
              <div className="flex -space-x-2 md:-space-x-1.5 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-6 md:h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="text-sm md:text-xs font-semibold text-gray-800 whitespace-nowrap">
                +5,000 viajeros confían
              </span>
            </div>

            {/* Separador */}
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>

            {/* Segundo badge - rating */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 md:px-4 md:py-2.5 rounded-full shadow-lg border border-blue-100 w-full sm:w-auto justify-center transform hover:scale-105 transition-transform">
              <div className="flex flex-shrink-0">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-500 text-lg md:text-sm">★</span> 
                ))}
              </div>
              <span className="text-sm md:text-xs font-semibold text-gray-800 whitespace-nowrap">
                4.9/5 Trustpilot
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator*/}
      <div className="absolute bottom-6 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 md:w-5 md:h-8 border-2 border-gray-600 rounded-full flex justify-center backdrop-blur-sm bg-white/30">
          <div className="w-1 h-3 md:h-2 bg-gray-600 rounded-full mt-2 md:mt-1.5"></div>
        </div>
      </div>
    </section>
  );
}