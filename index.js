const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" },
  { nombre: "Nicol", nota: 2.0, programa: "Diseno Web" },
  { nombre: "Gabriel", nota: 4.7, programa: "ADSO" },
  { nombre: "Valentina", nota: 4.7, programa: "Diseno Web" },
];

function mostrarAprendices(aprendices) {
  const aprendicesADSO = aprendices.filter((apr) => apr.programa === "ADSO");
  const aprendicesDW = aprendices.filter(
    (apr) => apr.programa === "Diseno Web",
  );
  console.table(aprendicesADSO);
  console.table(aprendicesDW);
  return { aprendicesADSO, aprendicesDW };
}

function promedioGeneral(aprendices) {
 mostrarAprendices(aprendices);
  const promedio = (aprendices) =>
    aprendices.reduce((acc, apr) => acc + apr.nota, 0) / aprendices.length;
  const ADSO = aprendices.filter((apr) => apr.programa === "ADSO");
  const DW = aprendices.filter((apr) => apr.programa === "Diseno Web");
  console.log(`Promedio ADSO: ${promedio(ADSO)}`);
  console.log(`Promedio Diseño Web: ${promedio(DW)}`);
}

function mostrarAprendicesAprobados(aprendices) {
  const aprendicesAprobados = aprendices.filter(
    (aprendiz) => aprendiz.nota >= 3.0,
  );
  console.log("===Aprendices Aprobados===");
  console.table(aprendicesAprobados);
}

function aprendicesReprobados(aprendices) {
  const reprobados = aprendices.filter((apr) => apr.nota < 3);
  console.log("Aprendices reprobados:");
  console.table(reprobados);
}

function mostrarNombresMayuscula(aprendices) {
  const nombresMayuscula = aprendices.map((aprendices) =>
    aprendices.nombre.toUpperCase(),
  );
  console.log("===Nombres en mayuscula===");
  console.table(nombresMayuscula);
}

function ordenarNota(aprendices) {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);

  console.log("===Aprendices ordenados por nota de mayor a menor===");
  console.table(ordenados);
}

function desempeño(aprendices) {
  for (aprendices of aprendices) {
    switch (true) {
      case aprendices.nota >= 4.5 && aprendices.nota <= 5.0:
        console.log(`${aprendices.nombre} tiene un desempeño superior`);
        break;
      case aprendices.nota >= 4 && aprendices.nota < 4.5:
        console.log(`${aprendices.nombre} tiene un desempeño alto`);
        break;
      case aprendices.nota >= 3 && aprendices.nota < 4.0:
        console.log(`${aprendices.nombre} tiene un desempeño basico`);
        break;
      default:
        console.log(`${aprendices.nombre} tiene un desempeño bajo`);
    }
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  let opcion = "";

  while (opcion !== "8") {
    console.log(`
    Menu
    1. Mostrar aprendices
    2. Mostrar aprendices aprobados
    3. Mostrar aprendices reprobados
    4. Mostrar nombres en mayúscula
    5. Promedio general
    6. Ordenar aprendices por nota
    7. Desempeño
    8. Salir
    `);

    rl.question("Escoja una opción (número): ", (respuesta) => {
      opcion = respuesta;

      switch (opcion) {
        case "1":
          mostrarAprendices(aprendices);
          break;
        case "2":
          mostrarAprendicesAprobados(aprendices);
          break;
        case "3":
          aprendicesReprobados(aprendices);
          break;
        case "4":
          mostrarNombresMayuscula(aprendices);
          break;
        case "5":
          promedioGeneral(aprendices);
          break;
        case "6":
          ordenarNota(aprendices);
          break;
        case "7":
          desempeño(aprendices);
          break;
        case "8":
          console.log("fin...");
          rl.close();
          return; 
        default:
          console.log("Opción no válida, intenta de nuevo.");
      }

      // volvemos a llamar a menu() para repetir
      menu();
    });
    break;
  }
}

menu();

