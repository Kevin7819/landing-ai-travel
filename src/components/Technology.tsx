export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-customGray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium text-sm">Tecnología Avanzada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tecnología detrás
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Impulsado por IA, scraping distribuido y análisis predictivo para 
              ofrecerte la información más precisa del mercado.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  text: "Machine Learning para predicción de precios",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  text: "Scraping distribuido de +100 fuentes", 
                  icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                },
                {
                  text: "Análisis de patrones históricos",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                },
                {
                  text: "Algoritmos de optimización en tiempo real",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              ].map((tech, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tech.icon} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{tech.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { 
                value: "500+", 
                label: "Aerolíneas", 
                color: "from-blue-500 to-blue-600",
                icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              },
              { 
                value: "1M+", 
                label: "Rutas", 
                color: "from-purple-500 to-purple-600",
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              },
              { 
                value: "10M", 
                label: "Precios/día", 
                color: "from-green-500 to-green-600",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              { 
                value: "95%", 
                label: "Precisión", 
                color: "from-orange-500 to-orange-600",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                  </div>
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}