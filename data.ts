export interface SablonaAktivity {
    typ: "kardio" | "silovy";
    nazev: string;
    vychoziCas: number;
    vychoziKm?: number;
    vychoziVaha?: number;
}

export const katalogAktivit: SablonaAktivity[] = [
    { typ: "kardio", nazev: "Běh venku", vychoziCas: 30, vychoziKm: 5 },
    { typ: "kardio", nazev: "Jízda na kole", vychoziCas: 60, vychoziKm: 20 },
    { typ: "kardio", nazev: "Plavání", vychoziCas: 45, vychoziKm: 2 },
    { typ: "silovy", nazev: "Dřepy s činkou", vychoziCas: 40, vychoziVaha: 60 },
    { typ: "silovy", nazev: "Bench press", vychoziCas: 30, vychoziVaha: 50 },
    { typ: "silovy", nazev: "Mrtvý tah", vychoziCas: 45, vychoziVaha: 80 }
];

export const DNY_V_TYDNU: string[] = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];