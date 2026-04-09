const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" }, 
    { nombre: "Luis",nota: 2.8, programa: "ADSO" }, 
    { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" }, 
    { nombre: "Sofia", nota: 5.0, programa:"Diseno Web" },
    { nombre: "Nicol", nota: 4.0, programa:"Diseno Web" },
    { nombre: "Gabriel", nota: 4.7, programa: "ADSO" }, 
    { nombre: "Valentina", nota: 4.7, programa: "Diseno Web" } 
];

function mostrarNombresMayuscula(aprendices) {
    const nombresMayuscula = aprendices.map (aprendices => aprendices.nombre.toUpperCase());
    console.log("===Nombres en mayuscula===");
    console.table(nombresMayuscula);
}

mostrarNombresMayuscula(aprendices);
