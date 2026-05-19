abstract class Aktivita {

    protected nazev: string;
    protected cas: number;

    constructor(nazev: string, cas: number) {

        if (nazev.trim() === "") {
            throw new Error("Nazev nesmi byt prazdny");
        }

        if (cas <= 0) {
            throw new Error("Cas musi byt kladne cislo");
        }

        this.nazev = nazev;
        this.cas = cas;
    }

    abstract kalorie(): number;

    abstract zobraz(): string;
}



class Kardio extends Aktivita {

    private km: number;

    constructor(nazev: string, cas: number, km: number) {
        super(nazev, cas);

        if (km <= 0) {
            throw new Error("Kilometry musi byt kladne cislo");
        }

        this.km = km;
    }

    kalorie(): number {
        return this.km * 60;
    }

    zobraz(): string {
        return `${this.nazev} (${this.cas} min, ${this.km} km) - ${this.kalorie()} kcal`;
    }
}



class Silovy extends Aktivita {

    private vaha: number;

    constructor(nazev: string, cas: number, vaha: number) {
        super(nazev, cas);

        if (vaha <= 0) {
            throw new Error("Vaha musi byt kladne cislo");
        }

        this.vaha = vaha;
    }

    kalorie(): number {
        return this.vaha * 0.5;
    }

    zobraz(): string {
        return `${this.nazev} (${this.cas} min, ${this.vaha} kg) - ${this.kalorie()} kcal`;
    }
}