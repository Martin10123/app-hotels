const DateTime = (dt) => {
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dateTime = new Date(dt);

  return `el ${days[dateTime.getDay()]}, ${dateTime.getUTCDate()} de ${
    months[dateTime.getMonth()]
  } de ${dateTime.getFullYear()}`;
};
export default DateTime;
