"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repositorio {
    constructor() {
        this.mapa = new Map();
    }
    add(key, t) {
        if (!this.mapa.has(key))
            this.mapa.set(key, t);
    }
    has(key) {
        return this.mapa.has(key);
    }
    rm(key) {
        this.mapa.delete(key);
    }
    get(key) {
        return this.mapa.get(key);
    }
    set(key, t) {
        this.mapa.set(key, t);
    }
    values() {
        return Array.from(this.mapa.values());
    }
    keys() {
        return Array.from(this.mapa.keys());
    }
}
exports.Repositorio = Repositorio;
;
//# sourceMappingURL=repositorio.js.map