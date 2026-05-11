declare const akrivityData: any[];

class Aktivita{
    constructor(
        protected nazev: string,
        protected cas: number
    ){}

    info() {
     return`${this.nazev} - ${this.cas} min`;
    }
}
class Kardio extends Aktivita {
    constructor(n: string, c: number, private d: number){
        super(n, c);
    }
    kcal() {
        return this.d * 50;
    }
}
class Silovy extends Aktivita{
        constructor(n: string, c: number, private v: number){
            super(n, c);
        }
            kcal(){
                return this.v * 0.5
            }
        }
    
