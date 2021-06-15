"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finaliz = void 0;
var direccion_1 = __importDefault(require("./direccion"));
var mail_1 = __importDefault(require("./mail"));
var telefono_1 = __importDefault(require("./telefono"));
var persona_1 = __importDefault(require("./persona"));
/* Mensajes  que voy a utilizar para separar la salida de los datos*/
exports.finaliz = '\x1b[31m\n\t*************************************************\n\t\t\v\tDatos Finalizados\n\v\t*************************************************\n\n\x1b[0m';
var success = '\x1b[30m\x1b[41m\n\t*************************************************\n\t\t\v\tNuevos Datos\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';
var newData = '\x1b[30m\x1b[42m\n\t*************************************************\n\t\t\vDatos Cambiados Satisfactoriamente\n\v\t*************************************************\x1b[0m\x1b[0m\n\n';
/*! Personas creadas */
/* Creo cada persona y les asigno los datos */
var persona1 = new persona_1.default("Rogelio", "Gilaranz Pernías", 27, "01234567l", new Date("02-02-1992"), "Amarilo", "Masculino", [new direccion_1.default("Avenida de Oviedo", 22, 33, "B", 33420, "Lugones", "Principado de Asturias")], [new mail_1.default("Estudiante", "M_gilaranz@student.com")], [new telefono_1.default("Estudios", 666544544), new telefono_1.default("Casa", 966544544)], "Realización del proyecto TS conjunto");
var persona2 = new persona_1.default("Sara", "Gutierrez Marin", 63, "07654321j", new Date(1957, 5, 12), "Añil", "Femenino", [new direccion_1.default("Rotonda del poligono", 0, 0, "", 12420, "Fuensalida", "Castilla la "), new direccion_1.default("C/Sin salida", 666, 0, "G", 33420, "Purgatorio", "Infierno")], [new mail_1.default("Personal", "loqsea@student.com")], [new telefono_1.default("Estudios", 611222333)], "Mami del Cole");
var persona3 = new persona_1.default("Agustina", "Diaz Rodriguez", 52, "24687333f", new Date(1969, 0, 28), "Violeta", "Femenino", [new direccion_1.default("Calle la esquina", 522, 3, "6", 28420, "Madrid", "Madrid")], [new mail_1.default("Trabajo", "Mimaildel_trabajo@miempresa.com"), new mail_1.default("Casa", "Mimailde_casa@micasa.com")], [new telefono_1.default("Particular", 966544544)], "Compañera del tabajo");
//Guardo estas personas en un array, por varios motivos:
//1º-> veo fácilmente cuantos hay
//2º-> Puedo acceder a ellos fácilmente
//3º-> Es muy útil para recorrerlos y hacer búsquedas
var personas = [persona1, persona2, persona3];
/* Mostrar Datos de Cada persona */
//Función que va a recorrer cada persona y a su vez va a llamar al
//metodo de la clase dónde se mostrarán los datos
function showData(personas) {
    for (var i = 0; i < personas.length; i++) {
        personas[i].mostrarDatos();
    }
}
/* Esta variable recoge el DNI a buscar. La idea es optenerlo de un campo en el .html */
//let toFind:number = parseInt('01234567');
var toFind = ['01234567l', '07654321j', '24687333f'];
/* Como no queda muy claro en el enunciado si hay q añadir nuevos datos o modificar los existentes,
he decidido crear las dos formas, que al final sólo es decir si pushea los datos, o los modifica */
function encontrarMailyPushear(toFind, personas) {
    console.log("\u001B[30m\n\t*************************************************\n\t\t\vDNI a a\u00F1adir datos ------>  " + toFind + "\n\v\t*************************************************\u001B[0m\n\n");
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].pushDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
}
;
function encontrarMailyCambiar(toFind, personas) {
    console.log("\u001B[30m\n\t*************************************************\n\t\t\vDNI a cambiar los datos ------>  " + toFind + "\n\v\t*************************************************\u001B[0m\n\n");
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].changeDATA(toFind) == true) {
            console.log(newData);
            personas[i].mostrarDatos();
            console.log(success);
        }
    }
    showData(personas);
}
;
/*Lamada a las funciones que nos mostrarán los datos desde métods definidos en las clases, y
la funcion qu nos recorrerá el array personas, con todas nuestras personas y llamará a la clase
función declarada dentro de la clase persona, que lo que hará es una comparativa(por eso devuelve un booleano),
si se encuentra el dni , se mostrarán los datos modificados de esa persona.
 Luego vuelve a mostrar los datos actualizados de todos una vez salido del bucle for, para comprobar los datos*/
showData(personas);
encontrarMailyPushear(toFind[0], personas);
encontrarMailyCambiar(toFind[1], personas);
