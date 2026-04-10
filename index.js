const aprendices = [
    { nombre: "Ana", nota: 4.5, programa: "ADSO" }, 
    { nombre: "Luis",nota: 2.8, programa: "ADSO" }, 
    { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
    { nombre: "Pedro", nota: 1.9, programa: "ADSO" }, 
    { nombre: "Sofia", nota: 5.0, programa:"Diseno Web" },
    { nombre: "Nicol", nota: 2.0, programa:"Diseno Web" },
    { nombre: "Gabriel", nota: 4.7, programa: "ADSO" }, 
    { nombre: "Valentina", nota: 4.7, programa: "Diseno Web" } 
];

    function mostrarAprendices(aprendices){
        const aprendicesADSO = aprendices.filter(apr=> apr.programa === "ADSO");
        const aprendicesDW = aprendices.filter(apr=> apr.programa === "Diseno Web");
        console.table(aprendicesADSO);
        console.table(aprendicesDW);
    }

    mostrarAprendices(aprendices);

    function mostrarAprendicesAprobados(aprendices){
        const aprendicesAprobados = aprendices.filter(aprendiz=> aprendiz.nota >= 3.0);
        console.log("===Aprendices Aprobados===");
        console.table(aprendicesAprobados);
    }

    mostrarAprendicesAprobados(aprendices);


    
function aprendicesReprobados(aprendices){
const reprobados = aprendices.filter(apr=> apr.nota < 3);
console.log("Aprendices reprobados:");
console.table(reprobados);
}

aprendicesReprobados(aprendices);