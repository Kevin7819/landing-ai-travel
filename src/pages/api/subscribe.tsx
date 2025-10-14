// src/components/SubscribeForm.tsx
import React, { useState } from "react";

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(res.ok ? "success" : "error");
  };

  return (
    <section className="py-16 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Sé de los primeros en probar la IA de viajes</h2>
      <p className="mb-8 text-gray-300">Dejá tus datos para recibir acceso anticipado</p>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="px-4 py-3 rounded-md text-black"
        />
        <input
          type="email"
          placeholder="Tu correo"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="px-4 py-3 rounded-md text-black"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          {status === "loading" ? "Enviando..." : "Unirme"}
        </button>
      </form>

      {status === "success" && <p className="text-green-400 mt-4">¡Gracias por registrarte!</p>}
      {status === "error" && <p className="text-red-400 mt-4">Hubo un error, intenta de nuevo.</p>}
    </section>
  );
};

export default SubscribeForm;
