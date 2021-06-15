import Direccion from "./direccion"
import Mail from './mail'
import Telefono from "./telefono"
import Persona from "./persona"


/* Mensajes  que voy a utilizar para separar la salida de los datos*/

export const finaliz = '\x1b[31m\n\t*************************************************\n\t\t\v\tDatos Finalizados\n\v\t*************************************************\n\n\x1b[0m';
const success = '\x1b[30m\x1b[41m\n\t*************************************************\n\t\t\v\tNuevos Datos\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';
const newData = '\x1b[30m\x1b[42m\n\t*************************************************\n\t\t\vDatos Cambiados Satisfactoriamente\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';

/*! Personas creadas */

/* Creo cada persona y les asigno los datos */
let persona1: Persona = new Persona("Rogelio", "Gilaranz Pernías", 27, "01234567l", new Date("02-02-1992"), "Amarilo", "Masculino", [new Direccion("Avenida de Oviedo", 22, 33, "B", 33420, "Lugones", "Principado de Asturias")], [new Mail("Estudiante", "M_gilaranz@student.com")], [new Telefono("Estudios", 666544544), new Telefono("Casa", 966544544)], "Realización del proyecto TS conjunto");
let persona2: Persona = new Persona("Sara", "Gutierrez Marin", 63, "07654321j", new Date(1957, 0o5, 12), "Añil", "Femenino", [new Direccion("Rotonda del poligono", 0, 0, "", 12420, "Fuensalida", "Castilla la "), new Direccion("C/Sin salida", 666, 0, "G", 33420, "Purgatorio", "Infierno")], [new Mail("Personal", "loqsea@student.com")], [new Telefono("Estudios", 611222333)], "Mami del Cole");
let persona3: Persona = new Persona("Agustina", "Diaz Rodriguez", 52, "24687333f", new Date(1969, 0o0, 28), "Violeta", "Femenino", [new Direccion("Calle la esquina", 522, 3, "6", 28420, "Madrid", "Madrid")], [new Mail("Trabajo", "Mimaildel_trabajo@miempresa.com"), new Mail("Casa", "Mimailde_casa@micasa.com")], [new Telefono("Particular", 966544544)], "Compañera del tabajo");

//Guardo estas personas en un array, por varios motivos:
//1º-> veo fácilmente cuantos hay
//2º-> Puedo acceder a ellos fácilmente
//3º-> Es muy útil para recorrerlos y hacer búsquedas
let personas = [persona1, persona2, persona3];

/* Mostrar Datos de Cada persona */

//Función que va a recorrer cada persona y a su vez va a llamar al
//metodo de la clase dónde se mostrarán los datos

function showData(personas: any): void {
    for (let i = 0; i < personas.length; i++) {
        personas[i].mostrarDatos();
    }
}

/* Esta variable recoge el DNI a buscar. La idea es optenerlo de un campo en el .html */
//let toFind:number = parseInt('01234567');
let toFind: string[] = ['01234567l', '07654321j', '24687333f'];

/* Como no queda muy claro en el enunciado si hay q añadir nuevos datos o modificar los existentes,
he decidido crear las dos formas, que al final sólo es decir si pushea los datos, o los modifica */
function encontrarMailyPushear(toFind: string, personas: any): void {

    console.log(`\x1b[30m\n\t*************************************************\n\t\t\vDNI a añadir datos ------>  ${toFind}\n\v\t*************************************************\x1b[0m\n\n`);

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].pushDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
};

function encontrarMailyCambiar(toFind: string, personas: any): void {

    console.log(`\x1b[30m\n\t*************************************************\n\t\t\vDNI a cambiar los datos ------>  ${toFind}\n\v\t*************************************************\x1b[0m\n\n`);

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].changeDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
};

/*Lamada a las funciones que nos mostrarán los datos desde métods definidos en las clases, y
la funcion qu nos recorrerá el array personas, con todas nuestras personas y llamará a la clase  
función declarada dentro de la clase persona, que lo que hará es una comparativa(por eso devuelve un booleano),
si se encuentra el dni , se mostrarán los datos modificados de esa persona.
 Luego vuelve a mostrar los datos actualizados de todos una vez salido del bucle for, para comprobar los datos*/
showData(personas);
encontrarMailyPushear(toFind[1], personas);
encontrarMailyCambiar(toFind[1], personas);

/* Lo hice de la misma persona para que se vea la diferencia, están guardados en un array los 3 DNi,
por lo que si quieres comprobar que funciona con los 3, sólo has de cambiar tofind[i], siendo i un
número entre 0 y 2 */