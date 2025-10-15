export default function Roadmap() {
  const phases = [
    {
      phase: "Fase 1",
      title: "Vuelos",
      status: "En desarrollo",
      description: "Análisis predictivo de tarifas aéreas",
      color: "from-green-500 to-green-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      phase: "Fase 2", 
      title: "Hoteles",
      status: "Próximamente",
      description: "Optimización de reservas hoteleras",
      color: "from-blue-500 to-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      phase: "Fase 3",
      title: "Experiencias",
      status: "Planificado", 
      description: "Tours y actividades personalizadas",
      color: "from-purple-500 to-purple-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      phase: "Fase 4",
      title: "Alquileres",
      status: "En visión",
      description: "Vehículos y propiedades vacacionales", 
      color: "from-pink-500 to-pink-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-customGray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-xs sm:text-sm">Roadmap Producto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Expansión futura
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Creando el ecosistema completo de viajes inteligentes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {phases.map((item, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${item.color} text-white p-5 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col`}>
                {/* Header con icono y fase */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-xs sm:text-sm font-semibold opacity-90">{item.phase}</div>
                  <div className="text-white opacity-90">
                    {item.icon}
                  </div>
                </div>

                {/* Contenido principal */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>

                  {/* Status badge */}
                  <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium mb-2 sm:mb-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      item.status === "En desarrollo" ? "bg-green-400" :
                      item.status === "Próximamente" ? "bg-yellow-400" :
                      item.status === "Planificado" ? "bg-blue-400" : "bg-gray-400"
                    }`}></div>
                    {item.status}
                  </div>

                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}