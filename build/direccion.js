"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion = /** @class */ (function () {
    /* Constructor */
    function Direccion(calle, numero, piso, letra, cp, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        /* Calle*/
        get: function () {
            return this._calle;
        },
        set: function (value) {
            this._calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        /* Numero */
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        /* Piso */
        get: function () {
            return this._piso;
        },
        set: function (value) {
            this._piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        /* Letra */
        get: function () {
            return this._letra;
        },
        set: function (value) {
            this._letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "cp", {
        /* Códig Postal */
        get: function () {
            return this._cp;
        },
        set: function (value) {
            this._cp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        /* Población */
        get: function () {
            return this._poblacion;
        },
        set: function (value) {
            this._poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        /* Provincia  */
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.default = Direccion;
