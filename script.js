"use strict";
class Aktivita {
    nazev;
    cas;
    constructor(nazev, cas) {
        if (nazev.trim() === "") {
            throw new Error("Nazev nesmi byt prazdny");
        }
        if (cas <= 0) {
            throw new Error("Cas musi byt kladne cislo");
        }
        this.nazev = nazev;
        this.cas = cas;
    }
}
class Kardio extends Aktivita {
    km;
    constructor(nazev, cas, km) {
        super(nazev, cas);
        if (km <= 0) {
            throw new Error("Kilometry musi byt kladne cislo");
        }
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
        if (vaha <= 0) {
            throw new Error("Vaha musi byt kladne cislo");
        }
        this.vaha = vaha;
    }
    kalorie() {
        return this.vaha * 0.5;
    }
    zobraz() {
        return `${this.nazev} (${this.cas} min, ${this.vaha} kg) - ${this.kalorie()} kcal`;
    }
}
window.onload = () => {
    const aktivity = [];
    for (const item of data) {
        if (item.typ === "kardio") {
            aktivity.push(new Kardio(item.nazev, item.cas, item.km));
        }
        else if (item.typ === "silovy") {
            aktivity.push(new Silovy(item.nazev, item.cas, item.vaha));
        }
    }
    const output = document.getElementById("output");
    let celkemKalorii = 0;
    for (const a of aktivity) {
        console.log(a.zobraz());
        const p = document.createElement("p");
        p.textContent = a.zobraz();
        output.appendChild(p);
        celkemKalorii += a.kalorie();
    }
    const total = document.createElement("h2");
    total.textContent = `Celkem spáleno: ${celkemKalorii} kcal`;
    output.appendChild(total);
    console.log(`Celkem spáleno: ${celkemKalorii} kcal`);
};
