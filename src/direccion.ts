class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _cp: number;
    private _poblacion: string;
    private _provincia: string;

    /* Constructor */
    constructor(calle: string, numero: number, piso: number, letra: string, cp: number, poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    /* Calle*/
    public get calle(): string {
        return this._calle;
    }
    public set calle(value: string) {
        this._calle = value;
    }
    /* Numero */
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    /* Piso */
    public get piso(): number {
        return this._piso;
    }
    public set piso(value: number) {
        this._piso = value;
    }
    /* Letra */
    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra = value;
    }
    /* Códig Postal */
    public get cp(): number {
        return this._cp;
    }
    public set cp(value: number) {
        this._cp = value;
    }
    /* Población */
    public get poblacion(): string {
        return this._poblacion;
    }
    public set poblacion(value: string) {
        this._poblacion = value;
    }
    /* Provincia  */
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }

}

export default Direccion