"use strict";
class Aktivita {
    nazev;
    cas;
    constructor(nazev, cas) {
        this.nazev = nazev;
        this.cas = cas;
    }
}
class Kardio extends Aktivita {
    km;
    constructor(nazev, cas, km) {
        super(nazev, cas);
        this.km = km;
    }
    kalorie() {
        return this.km * 60;
    }
    zobraz() {
        return `${this.nazev} (${this.cas} min, ${this.km} km) - ${this.kalorie()} kcal`;
    }
}
class Silovy extends Aktivita {
    vaha;
    constructor(nazev, cas, vaha) {
        super(nazev, cas);
        this.vaha = vaha;
    }
    kalorie() {
        return this.vaha * 0.5;
    }
    zobraz() {
        return `${this.nazev} (${this.cas} min, ${this.vaha} kg) - ${this.kalorie()} kcal`;
    }
}
window.Kardio = Kardio;
window.Silovy = Silovy;
