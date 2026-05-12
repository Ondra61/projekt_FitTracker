abstract class Aktivita {
  constructor(
    protected nazev: string,
    protected cas: number
  ) {}

  abstract kalorie(): number;
  abstract zobraz(): string;
}

class Kardio extends Aktivita {
  constructor(nazev: string, cas: number, private km: number) {
    super(nazev, cas);
  }

  kalorie(): number {
    return this.km * 60;
  }

  zobraz(): string {
    return `${this.nazev} (${this.cas} min, ${this.km} km) - ${this.kalorie()} kcal`;
  }
}

class Silovy extends Aktivita {
  constructor(nazev: string, cas: number, private vaha: number) {
    super(nazev, cas);
  }

  kalorie(): number {
    return this.vaha * 0.5;
  }

  zobraz(): string {
    return `${this.nazev} (${this.cas} min, ${this.vaha} kg) - ${this.kalorie()} kcal`;
  }
}

(window as any).Kardio = Kardio;
(window as any).Silovy = Silovy;
