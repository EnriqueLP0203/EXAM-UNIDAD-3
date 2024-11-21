const opciones = ["piedra", "papel", "tijera"];

// ingresa lo que quieres escoger y lo pasa a minusculas
let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();

// esta constante agarra un valor de las opciones del o al 2
let turnoPC = () => {
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
};
//la pc toma el valor del metodo usado arriba
let pc = turnoPC();

// Usamos el metodo if para determinar quien gana
function ganador(jugador, pc) {
    if (jugador === pc) {
        return "¡Empate!";
    }
    if (
        (jugador === "piedra" && pc === "tijera") ||
        (jugador === "papel" && pc === "piedra") ||
        (jugador === "tijera" && pc === "papel")
    ) {
        return "¡Ganaste!";
    }
    return "Perdiste.";
}

// Mostrar el resultado de quien gano
console.log(`Tú elegiste: ${jugador}`);
console.log(`El PC eligió: ${pc}`);
console.log(ganador(jugador, pc));
