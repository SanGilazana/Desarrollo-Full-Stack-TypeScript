import Direccion from "./direccion"
import Mail from './mail'
import Telefono from "./telefono"
import { finaliz } from './main';


class Persona {

    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI: string;
    private _cumpleanos: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;


    constructor(nombre: string,
        apellidos: string,
        edad: number,
        DNI: string,
        cumpleanos: Date,
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    /* Nombre */
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    /* Apellidos */
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    /* Edad */
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    /* DNI */
    public get DNI(): string {
        return this._DNI;
    }
    public set DNI(value: string) {
        this._DNI = value;
    }
    /* Cumpleaños */

    public get cumpleanos(): Date {
        return this._cumpleanos;
    }
    public set cumpleanos(value: Date) {
        this._cumpleanos = value;
    }
    /* Color Favorito */

    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(value: string) {
        this._colorFavorito = value;
    }
    /* Sexo */

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }
    /* Direcciones */

    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }
    /* Mails */

    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }
    /* Telefonos */

    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: Telefono[]) {
        this._telefonos = value;
    }
    /* Notas*/
    public get notas(): string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas = value;
    }

    /* Muesta el DNI separado por Letra y número, la letra en mayúsculas */
    mostrarDNI(): string {
        let num: string = this._DNI.substr(0, this._DNI.length - 1);
        let letra: string = this._DNI.substr(this._DNI.length - 1, 1);
        letra = letra.toUpperCase();
        let DNI: string = `Número ${num} Letra ${letra}`
        return DNI
    }

    /* Bucle para recorrer los datos que hay en las subclases e imprimirlos con console.log */

    mostrarDatosSubClases(datos: any): void {
        for (let i = 0; i < datos.length; i++) {
            const aux = datos[i];
            console.log(`\x1b[35m`, aux, '\x1b[0m');
        }
    }

    /* Aquí hice una pequeña funcion que me recoge los datos de la fecha de nacimiento,
     y muestra que día será su cumpleaños */
    mostrarFecha(): string {
        let dia: number = this._cumpleanos.getDate() - 1;
        let mes: number = this._cumpleanos.getMonth();
        let meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"]
        let fecha: string = `${dia} de ${meses[mes]}`
        return fecha
    }

    /* Función que va a mostar todos los datos
    1º -> Guardo los datos principales de persona en una variable mensaje
    2º -> Guardo notas, que irá al final, para no romper la lógica de la introduccion de los datos
    3º -> Muestro los primeros datos desde nombre hasta sexo con la variable mensaje en la que previamente 
        había guardado los datos
    4º -> Hago 3 llamadas(una por cada subclase:direccin, mail, telefono) a la funcion generica que,
     me va a recorrer las subclases y sacar los datos por consola
    5º -> Siguiendo el orden imprimo los guardado en _notas
    6º -> Imprimo una confirmación para saber que los datos leídos acaban ahí
    */
    mostrarDatos(): void {
        let mensaje: string = `\v\tNombre: ${this._nombre}\n\t
        Apellidos: ${this._apellidos}\n\t
        Edad: ${this._edad}\n\t
        DNI: ${this.mostrarDNI()}\n\t
        Cumpleaños: ${this.mostrarFecha()}\n\t
        Color Favorito: ${this._colorFavorito}\n\t
        Sexo: ${this._sexo}\n\t`;

        let notas: string = `\n\tNotas: ${this._notas}\v`;

        console.log(`\x1b[36m`, mensaje, '\x1b[0m');

        this.mostrarDatosSubClases(this._direcciones);
        this.mostrarDatosSubClases(this._mails);
        this.mostrarDatosSubClases(this._telefonos);

        console.log('\x1b[36m', notas, '\x1b[0m')
        console.log(finaliz);
    }

    /* Sube un nuevo registro a cada clase */

    pushDATA(toFind: string): boolean {
        if (this._DNI == toFind) {
            this._direcciones.push(new Direccion("C/infinita", 54, 40, "4", 63420, "Edén", "Cielo"))
            this._mails.push(new Mail("nuevoMail", "thisIsMyNew@Mail.com"))
            this._telefonos.push(new Telefono("NuevoTelefono", parseInt('000000001')))
            return true
        }
        return false
    }

    /* modifica el registro de cada clase */

    changeDATA(toFind: string): boolean {
        if (this._DNI == toFind) {
            this._direcciones = [(new Direccion("C/de la fuente", 64, 45, "L", parseInt('03420'), "Machupichu", "Mexico,DC"))]
            this._mails = [(new Mail("maildelete", "deletemail@Mail.com"))]
            this._telefonos = [(new Telefono("DeleteTelefono", parseInt('010000001')))]
            return true
        }
        return false
    }
}

export default Persona