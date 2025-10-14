export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Definí tu aeropuerto de salida",
      description: "Ingresa tu ciudad de origen y destinos de interés"
    },
    {
      number: "02", 
      title: "La IA analiza miles de precios",
      description: "Nuestro sistema procesa datos en tiempo real de múltiples fuentes"
    },
    {
      number: "03",
      title: "Recibí alertas de las mejores ofertas",
      description: "Te notificamos cuando los precios alcanzan su punto óptimo"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-customGray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium text-sm">Proceso Simple</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos simples para empezar a ahorrar en tus viajes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Radar Animation */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-32 border-4 border-blue-500 rounded-full mx-auto mb-4 animate-pulse relative">
              <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-ping"></div>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              Analizando precios en tiempo real de +500 aerolíneas y +1M de rutas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}