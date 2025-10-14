export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo con icono de avión */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">TravelAI</span>
          </div>

          {/* Navigation con iconos como Hopper */}
          <div className="hidden lg:flex items-center space-x-1 bg-white/80 rounded-2xl px-2 py-1 border border-gray-200/60">
            {[
              { 
                name: "Vuelos", 
                icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
                active: true
              },
              { 
                name: "Hoteles", 
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              },
              { 
                name: "Ofertas", 
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              { 
                name: "Mis Viajes", 
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  item.active 
                    ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Auth Section con iconos */}
          <div className="flex items-center space-x-3">
            {/* Notifications Icon */}
            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors p-2 hover:bg-gray-100 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden sm:block">Iniciar Sesión</span>
              </button>
              
              {/* Download App Button con icono */}
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Descargar App</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (opcional) */}
        <div className="lg:hidden mt-3 pt-3 border-t border-gray-200">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {["Vuelos", "Hoteles", "Ofertas", "Mis Viajes"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex-shrink-0 text-sm text-gray-600 hover:text-blue-600 font-medium px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}