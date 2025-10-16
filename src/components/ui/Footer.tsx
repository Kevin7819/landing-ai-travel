export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">LPTrips</span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Revolucionando la forma en que el mundo viaja con inteligencia artificial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
              <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">Cómo funciona</a></li>
              <li><a href="#benefits" className="hover:text-blue-600 transition-colors">Beneficios</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
              <li className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">hola@LPTrips.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500">
          <p className="text-xs sm:text-sm">&copy; 2024 LPTrips. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}