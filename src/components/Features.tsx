export default function Features() {
  const features = [
    {
      icon: "📊",
      title: "Predicción de precios",
      description: "Nuestra IA analiza patrones históricos para predecir cuándo comprar"
    },
    {
      icon: "🔔",
      title: "Alertas inteligentes",
      description: "Te avisamos cuando los precios bajan a su punto óptimo"
    },
    {
      icon: "💰",
      title: "Ahorro garantizado",
      description: "Los usuarios ahorran en promedio 40% en sus viajes"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnología avanzada que trabaja para que ahorres en cada viaje
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}