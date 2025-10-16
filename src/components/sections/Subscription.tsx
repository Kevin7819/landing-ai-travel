export default function Subscription() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge  */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6 sm:mb-8 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm tracking-wide">ACCESO EXCLUSIVO</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 leading-tight">
            Sé de los primeros en 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              probar nuestra IA
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 leading-relaxed font-light">
            Únete a la lista de espera y recibe acceso prioritario al lanzamiento
          </p>

          {/* Form container */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/20 rounded-full -translate-y-12 translate-x-12 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-200/20 rounded-full translate-y-14 -translate-x-14 blur-xl"></div>
            
            <div className="absolute top-2 left-2 w-10 h-10 text-blue-500/70">
              {/* Icono estrella */}
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
              </svg>
            </div>
            <div className="absolute bottom-2 right-2 w-12 h-12 text-purple-500/70">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            
            <div className="absolute top-2 right-2 w-8 h-8 text-blue-400/60">
             <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            </div>
            <div className="absolute bottom-2 left-2 w-9 h-9 text-purple-400/60">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-4V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v1H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 5h6v1H9V5zm11 15H4V9h2v1h2V9h8v1h2V9h2v11z"/>
                </svg>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Input Nombre */}
                <div className="group relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Tu nombre completo"
                    className="w-full pl-10 pr-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-gray-200 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-blue-300 group-hover:bg-white"
                  />
                </div>
                
                {/* Input Email */}
                <div className="group relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    placeholder="tu.email@ejemplo.com"
                    type="email"
                    className="w-full pl-10 pr-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-gray-200 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-blue-300 group-hover:bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="mx-4 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>

              <div className="text-center">
                <button
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 sm:px-10 sm:py-4 rounded-xl font-semibold text-base transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto w-full sm:w-auto min-w-[200px] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="relative">Unirse a la lista</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-green-50 rounded-full px-3 py-1.5 border border-green-200">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">100% seguro · Sin spam</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-gray-700">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-gray-900">+2,847</div>
                <div className="text-xs text-gray-600 font-medium">personas ya unidas</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-center">
              <div className="w-6 h-6 text-gray-400">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"/>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-gray-200">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mt-1.5"></div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">Acceso prioritario</div>
                  <div className="text-xs text-gray-600">al lanzamiento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}