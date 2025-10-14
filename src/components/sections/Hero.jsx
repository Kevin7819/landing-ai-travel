export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Overlay muy ligero para mejor legibilidad */}
        <div className="absolute inset-0 bg-white/20 z-10"></div>
        
        {/* Imagen de fondo */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/trave.jpg")'
          }}
        />
        
        {/* Gradiente sutil para realzar la imagen */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-purple-50/10 z-10"></div>
        
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pb-6">

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge con mejor contraste */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-12 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-sm">IA activa • Analizando precios en tiempo real</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
            Viaja más,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg mt-3 pb-4">
              paga menos
            </span>
          </h1>

          {/* Subtitle con mejor contraste */}
          <p className="text-xl md:text-2xl text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Tu asistente de IA personal para encontrar las mejores ofertas de vuelos y hoteles
          </p>

          {/* Search Form con glass effect */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-2 max-w-2xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Where */}
              <div className="flex-1">
                <div className="px-4 py-3 text-left cursor-pointer hover:bg-gray-50/50 rounded-xl transition-colors">
                  <div className="text-xs font-medium text-gray-600 mb-1">Dónde</div>
                  <div className="text-gray-900 font-medium">Buscar destino</div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex-1">
                <div className="px-4 py-3 text-left cursor-pointer hover:bg-gray-50/50 rounded-xl transition-colors">
                  <div className="text-xs font-medium text-gray-600 mb-1">Fechas</div>
                  <div className="text-gray-900 font-medium">Agregar fechas</div>
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1">
                <div className="px-4 py-3 text-left cursor-pointer hover:bg-gray-50/50 rounded-xl transition-colors">
                  <div className="text-xs font-medium text-gray-600 mb-1">Viajeros</div>
                  <div className="text-gray-900 font-medium">2 personas</div>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Buscar
              </button>
            </div>
          </div>

          {/* Features Grid con mejor diseño */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-4"> {/* Cambiado de mb-16 a mb-8 */}
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
              <div key={index} className="bg-white/95 backdrop-blur-md border border-white/30 rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Iconos SVG mejorados */}
                <div className="flex justify-center mb-4">
                  {index === 0 && (
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"> {/* Añadido mt-8 */}
            {/* Primer badge - usuarios */}
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-3 rounded-full shadow-xl border border-white/30 w-full sm:w-auto justify-center transform hover:scale-105 transition-transform">
              <div className="flex -space-x-2 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
                ))}
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
                +5,000 viajeros confían
              </span>
            </div>

            {/* Separador - solo visible en desktop */}
            <div className="h-6 w-px bg-gray-400/60 hidden sm:block"></div>

            {/* Segundo badge - rating */}
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 sm:px-6 sm:py-3 rounded-full shadow-xl border border-white/30 w-full sm:w-auto justify-center transform hover:scale-105 transition-transform">
              <div className="flex flex-shrink-0">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-500 text-lg sm:text-xl">★</span> 
                ))}
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
                4.9/5 Trustpilot
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center backdrop-blur-sm bg-white/30">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}