export default function Benefits() {
  const benefits = [
    {
      title: "Análisis de precios en tiempo real",
      description: "Monitoreo constante de fluctuaciones en tarifas aéreas y hoteleras",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Alertas automáticas cuando bajan los precios", 
      description: "Notificaciones inteligentes en el momento perfecto para comprar",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      title: "Explorá nuevos destinos económicos",
      description: "Descubre lugares increíbles que se ajustan a tu presupuesto",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Integración con múltiples plataformas",
      description: "Conectamos con Skyscanner, Kayak, Booking.com y más",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 backdrop-blur-sm border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 shadow-sm">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-xs sm:text-sm tracking-wide">VENTAJAS EXCLUSIVAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Beneficios principales
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Todo lo que necesitas para viajar inteligente y ahorrar más
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 rounded-xl sm:rounded-2xl group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm text-center leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 rounded-xl px-5 sm:px-6 py-3 sm:py-4 border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium text-sm">Garantía de satisfacción</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium text-sm">Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}