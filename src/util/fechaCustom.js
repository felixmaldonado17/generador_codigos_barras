export const formatearFechaConTextoHumano = (fecha) => {
  if (!fecha || isNaN(new Date(fecha).getTime())) return "Fecha no disponible";

  const fechaObj = new Date(fecha);
  const ahora = new Date();

  const esMismaFecha = (a, b) => a.toDateString() === b.toDateString();

  const esHoy = esMismaFecha(fechaObj, ahora);

  const ayer = new Date();
  ayer.setDate(ayer.getDate() - 1);
  const esAyer = esMismaFecha(fechaObj, ayer);

  const horaFormateada = fechaObj.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (esHoy) return `Hoy a las ${horaFormateada}`;
  if (esAyer) return `Ayer a las ${horaFormateada}`;

  return fechaObj.toLocaleString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
