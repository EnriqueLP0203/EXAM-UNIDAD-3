let frase = prompt('Ingrese la frase:');

// se convierte en minusculas para evitar problemas al escribir el texto
let fraseMinusculas = frase.toLowerCase();

//creamos la variable que tendra el metodo match, buscara las vocales,si no hay vocales dara cero.
let totalVocales = fraseMinusculas.match(/[aeiou]/g)?.length || 0;
console.log('El total de todas las vocales es:', totalVocales);


