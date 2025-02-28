let area, tecnologia, camino;
let tecnologias = [];

while (true) {
    area = prompt("¿Quieres seguir en el área de Front-End o Back-End?").toLowerCase().replace(/[- ]/g, "");
    if (area === "frontend" || area === "backend") break;
    alert("Debes ingresar una opción válida. Inténtalo de nuevo.");
}

while (true) {
    tecnologia = prompt(`¿Quieres aprender ${area === "frontend" ? "React o Vue" : "C# o Java"}?`).toLowerCase();
    if ((area === "frontend" && (tecnologia === "react" || tecnologia === "vue")) || 
        (area === "backend" && (tecnologia === "c#" || tecnologia === "java"))) {
        break;
    }
    alert("Debes ingresar una opción válida. Inténtalo de nuevo.");
}

alert(`Genial, aprenderás ${tecnologia} en el área de ${area === "frontend" ? "Front-End" : "Back-End"}.`);

while (true) {
    camino = prompt("¿Quieres especializarte en el área elegida o convertirte en Fullstack? (Escribe 'especializarme' o 'Fullstack')").toLowerCase();
    if (camino === "especializarme" || camino === "fullstack") break;
    alert("Debes ingresar una opción válida. Inténtalo de nuevo.");
}

alert(camino === "especializarme" ? "¡Buena elección! Seguirás mejorando en tu campo de expertise." : "¡Genial! Aprenderás tanto Front-End como Back-End.");

while (true) {
    let nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    if (!nuevaTecnologia) break;
    tecnologias.push(nuevaTecnologia);
    alert(`Me parece una gran idea que quieras aprender ${nuevaTecnologia}!`);
    if (prompt("¿Quieres agregar otra tecnología? (Escribe 'ok' para continuar o cualquier otra tecla para salir)").toLowerCase() !== "ok") {
        alert("Has optado por salir, muchas gracias por participar. ¡Adiós!");
        break;
    }
}

if (tecnologias.length === 1) {
    alert("Has elegido aprender la siguiente tecnología: " + tecnologias.map(t => `- ${t} -`).join(" "));
} else if (tecnologias.length > 1) {
    alert("Has elegido aprender las siguientes tecnologías: " + tecnologias.map(t => `- ${t} -`).join(" "));
}

console.log("Lista de tecnologías seleccionadas:", tecnologias);
