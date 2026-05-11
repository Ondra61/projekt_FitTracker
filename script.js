"use strict";
class Aktivita {
    nazev;
    cas;
    constructor(nazev, cas) {
        this.nazev = nazev;
        this.cas = cas;
    }
    info() {
        return `${this.nazev} - ${this.cas} min`;
    }
}
class Kardio extends Aktivita {
    d;
    constructor(n, c, d) {
        super(n, c);
        this.d = d;
    }
    kcal() {
        return this.d * 50;
    }
}
class Silovy extends Aktivita {
    v;
    constructor(n, c, v) {
        super(n, c);
        this.v = v;
    }
    kcal() {
        return this.v * 0.5;
    }
}
