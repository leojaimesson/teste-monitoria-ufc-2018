export class Repositorio<T> {
    private mapa: Map<string, T>;

    constructor(){
        this.mapa = new Map<string, T>();
    }

    add(key: string, t: T) {
        if(!this.mapa.has(key))    
            this.mapa.set(key, t);
    }

    has(key: string): boolean {
        return this.mapa.has(key);
    }

    rm(key: string) {
        this.mapa.delete(key)
    }

    get(key: string): any {
        return this.mapa.get(key);
    }

    set(key: string, t: T){
        this.mapa.set(key, t);
    }

    values(): Array<any>{
        return Array.from(this.mapa.values());
    }

    keys(): Array<string>{
        return Array.from(this.mapa.keys());
    }
};