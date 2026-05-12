abstract class Aktivita {
  constructor(
    protected nazev: string,
    protected cas: number
  ) {}

  abstract kalorie(): number;
}

class Kardio extends Aktivita {
  constructor(nazev: string, cas: number, private km: number) {
    super(nazev, cas);
  }

  kalorie(): number {
    return this.km * 60;
  }
}

class Silovy extends Aktivita {
  constructor(nazev: string, cas: number, private vaha: number) {
    super(nazev, cas);
  }

  kalorie(): number {
    return this.vaha * 0.5;
  }
}

