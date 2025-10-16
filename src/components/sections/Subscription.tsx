export default function Subscription() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-customGray">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-xs sm:text-sm">Acceso Anticipado</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Sé de los primeros en probar la búsqueda inteligente de viajes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Únete a nuestra lista de espera y recibe acceso prioritario cuando lancemos
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div>
                <input
                  placeholder="Tu nombre"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <input
                  placeholder="Tu email"
                  type="email"
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-lg whitespace-nowrap flex items-center justify-center gap-2 mx-auto w-full sm:w-auto"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Unirse a la lista
              </button>
            </div>

            <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Sin spam. Puedes darte de baja en cualquier momento.</span>
            </div>
          </div>

          {/* Trust elements */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-600 px-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex -space-x-1.5 sm:-space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white shadow-sm"></div>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium">+2,500 personas ya se han unido</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Privacidad garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}