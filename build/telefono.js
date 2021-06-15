"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        /* Getter y Setter para tipo private */
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.default = Telefono;
