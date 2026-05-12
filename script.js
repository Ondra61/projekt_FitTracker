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
}
