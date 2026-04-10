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
        return {aprendicesADSO, aprendicesDW};
    }

    mostrarAprendices(aprendices);

    function promedioGeneral(aprendices){
    ADSO = mostrarAprendices(aprendices).aprendicesADSO;
    const suma = ADSO.reduce((acc, apr)=> acc + apr.nota,0);
    const promedio = suma/ADSO.length;
    console.log(`el promedio de notas de todos los aprendices ADSO es: ${promedio}`);
    DW = mostrarAprendices(aprendices).aprendicesDW;
    const sumaDW = DW.reduce((acc, apr)=> acc + apr.nota,0);
    const promedioDW = sumaDW/DW.length;
    console.log(`el promedio de notas de todos los aprendices Diseno Web es: ${promedioDW}`);
}

promedioGeneral(aprendices);

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

function mostrarNombresMayuscula(aprendices) {
    const nombresMayuscula = aprendices.map (aprendices => aprendices.nombre.toUpperCase());
    console.log("===Nombres en mayuscula===");
    console.table(nombresMayuscula);
}

mostrarNombresMayuscula(aprendices);


function ordenarNota (aprendices){
    const ordenados = [...aprendices].sort ((a,b) => b.nota - a.nota);

    console.log("===Aprendices ordenados por nota de mayor a menor===");
    console.table(ordenados);
}
ordenarNota(aprendices);

function desempeño(aprendices){
    
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
        };
    }
    }

    desempeño(aprendices); 