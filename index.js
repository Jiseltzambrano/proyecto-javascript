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
function mostrarMenu() {
    let opcion = "";
    while (opcion !== "0") {
        console.log("\nMenú de opciones:"); 
        switch (opcion) {
            case "1":
                mostrarAprendices();
                break;
            case "2":
                mostrarAprendicesAprobados();
                break;
            case "3":
                aprendicesReprobados();
                break;
            case "4":
                mostrarNombresMayuscula();
                break;
            case "5":
                promedioGeneral();
                break;
            case "6":
                ordenarNota ();
                break;
            case "7":
                desempeño();
                break;
            case "0":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida");
        }
    }
}
