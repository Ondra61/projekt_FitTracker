"use strict";
class Aktivita {
    nazev;
    cas;
    constructor(nazev, cas) {
        this.nazev = nazev;
        this.cas = cas;
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> 014537fc98db26c3241698542902958bc404c88c
