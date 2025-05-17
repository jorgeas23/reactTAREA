import React, { useState } from "react";

export default function Informacion() {
  const secciones = {
    inicio: "Bienvenido a nuestra página de inicio. Aquí encontrarás información general.",
    servicios: "Ofrecemos una variedad de servicios para cubrir tus necesidades.",
    acerca: "Somos una empresa comprometida con la excelencia y la innovación.",
    contacto: "Puedes contactarnos por correo o redes sociales.",
  };

  const [seccionActiva, setSeccionActiva] = useState("inicio");

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
     
      <div className="flex flex-col space-y-3">
        {Object.keys(secciones).map((clave) => (
          <button
            key={clave}
            onClick={() => setSeccionActiva(clave)}
            className={`text-left px-4 py-2 rounded-lg font-semibold transition ${
              seccionActiva === clave
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {clave.charAt(0).toUpperCase() + clave.slice(1)}
          </button>
        ))}
      </div>

      
      <div className="flex-1 bg-white shadow-md p-6 rounded-lg text-gray-800">
        {secciones[seccionActiva]}
      </div>
    </div>
  );
}
