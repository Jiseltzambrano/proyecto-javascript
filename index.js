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

function mostrarAprendices(aprendices){
    const aprendicesADSO = aprendices.filter(apr=> apr.programa === "ADSO");
    const aprendicesDW = aprendices.filter(apr=> apr.programa === "Diseno Web");
    return {aprendicesADSO, aprendicesDW};
    console.table(aprendicesADSO);
    console.table(aprendicesDW);
}

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