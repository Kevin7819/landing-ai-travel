export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Definí tu aeropuerto de salida",
      description: "Ingresa tu ciudad de origen y destinos de interés",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      number: "02", 
      title: "La IA analiza miles de precios",
      description: "Nuestro sistema procesa datos en tiempo real de múltiples fuentes",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    },
    {
      number: "03",
      title: "Recibí alertas de las mejores ofertas",
      description: "Te notificamos cuando los precios alcanzan su punto óptimo",
      icon: "M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 6v6l4 2"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-custom-gray from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-custom-gray backdrop-blur-sm border border-blue-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-sm">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold text-xs sm:text-sm tracking-wide">PROCESO INTELIGENTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Cómo funciona
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Un proceso diseñado para maximizar tus ahorros con tecnología de punta
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                {/* Número con icono */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-xl shadow-blue-500/25 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-black mb-1">{step.number}</div>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="bg-custom-gray backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border bg-custom-gray group-hover:shadow-2xl group-hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-custom-gray backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl border bg-custom-gray">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border-2 border-purple-500/50 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { value: "500+", label: "Aerolíneas" },
                { value: "1M+", label: "Rutas" },
                { value: "10M", label: "Precios/día" },
                { value: "95%", label: "Precisión" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-medium mt-6 sm:mt-8 text-sm sm:text-base md:text-lg px-4">
              Monitoreo continuo de precios en tiempo real para garantizar los mejores deals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}