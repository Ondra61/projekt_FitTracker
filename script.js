import { katalogAktivit, DNY_V_TYDNU } from "./data.js";
// ==========================================
// 1. OOP MODEL (Splňuje zadání architektury)
// ==========================================
class Aktivita {
    nazev;
    cas;
    den;
    constructor(nazev, cas, den) {
        this.nazev = nazev;
        this.cas = cas;
        this.den = den;
    }
}
class Kardio extends Aktivita {
    km;
    constructor(nazev, cas, den, km) {
        super(nazev, cas, den);
        this.km = km;
    }
    kalorie() {
        return Math.round(this.km * 60);
    }
    zobraz() {
        return `🏃 ${this.nazev} (${this.cas} min, ${this.km} km) → ${this.kalorie()} kcal`;
    }
}
class Silovy extends Aktivita {
    vaha;
    constructor(nazev, cas, den, vaha) {
        super(nazev, cas, den);
        this.vaha = vaha;
    }
    kalorie() {
        return Math.round((this.cas * 5) + (this.vaha * 0.5));
    }
    zobraz() {
        return `🏋️ ${this.nazev} (${this.cas} min, ${this.vaha} kg) → ${this.kalorie()} kcal`;
    }
}
// ==========================================
// 2. STAV A LOGIKA ROZHRANÍ
// ==========================================
const pridaneAktivity = []; // Společné pole pro polymorfní ukládání
let aktualniSablona = null;
// Načtení prvků z HTML a přetypování
const denSelect = document.getElementById("denSelect");
const dnyKontejner = document.getElementById("dnyKontejner");
const tydenniSouhrnBlok = document.getElementById("tydenniSouhrnBlok");
const katalogDiv = document.getElementById("katalog");
const modal = document.getElementById("modal");
const modalForm = document.getElementById("modalForm");
const UI = {
    nazev: document.getElementById("modalNazev"),
    cas: document.getElementById("modalCas"),
    km: document.getElementById("modalKm"),
    vaha: document.getElementById("modalVaha"),
    kardioBlok: document.getElementById("modalKardioInputy"),
    silovyBlok: document.getElementById("modalSilovyInputy"),
    btnZrusit: document.getElementById("btnZrusit")
};
// Naplnění výběru dnů pomocí klasického FOR cyklu
for (let i = 0; i < DNY_V_TYDNU.length; i++) {
    let den = DNY_V_TYDNU[i];
    denSelect.add(new Option(den, den));
}
// Generování tlačítek katalogu pomocí klasického FOR cyklu
for (let i = 0; i < katalogAktivit.length; i++) {
    let sablona = katalogAktivit[i];
    const btn = document.createElement("button");
    btn.className = "btn-katalog " + sablona.typ;
    btn.type = "button";
    let typText = "Síla";
    if (sablona.typ === "kardio") {
        typText = "Kardio";
    }
    btn.innerHTML = "<strong>" + sablona.nazev + "</strong> <small>" + typText + "</small>";
    btn.addEventListener("click", function () {
        aktualniSablona = sablona;
        UI.nazev.textContent = "Zadat: " + sablona.nazev;
        UI.cas.value = sablona.vychoziCas.toString();
        if (sablona.typ === "kardio") {
            UI.kardioBlok.style.display = "block";
            UI.silovyBlok.style.display = "none";
            UI.km.value = (sablona.vychoziKm || 0).toString();
        }
        else {
            UI.kardioBlok.style.display = "none";
            UI.silovyBlok.style.display = "block";
            UI.vaha.value = (sablona.vychoziVaha || 0).toString();
        }
        modal.style.display = "flex";
    });
    katalogDiv.appendChild(btn);
}
// Zavření modálního okna tlačítkem Zrušit
UI.btnZrusit.addEventListener("click", function () {
    modal.style.display = "none";
});
// ZDE JE OPRAVA: Odeslání formuláře (Tlačítko Uložit)
modalForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Zastaví restart stránky prohlížečem
    if (aktualniSablona === null) {
        return;
    }
    const cas = Number(UI.cas.value);
    const den = denSelect.value;
    let novaAktivita;
    if (aktualniSablona.typ === "kardio") {
        novaAktivita = new Kardio(aktualniSablona.nazev, cas, den, Number(UI.km.value));
    }
    else {
        novaAktivita = new Silovy(aktualniSablona.nazev, cas, den, Number(UI.vaha.value));
    }
    pridaneAktivity.push(novaAktivita);
    modal.style.display = "none";
    aktualizujZobrazeni();
});
// Výpočet týdenního souhrnu (Využití Polymorfismu)
function aktualizujTydenniSouhrn() {
    let celkemKcal = 0;
    let celkemCas = 0;
    for (let i = 0; i < pridaneAktivity.length; i++) {
        let akt = pridaneAktivity[i];
        celkemKcal = celkemKcal + akt.kalorie(); // Polymorfní volání metody .kalorie()
        celkemCas = celkemCas + akt.cas;
    }
    const tydenniCil = 2500;
    let procenta = (celkemKcal / tydenniCil) * 100;
    if (procenta > 100) {
        procenta = 100;
    }
    tydenniSouhrnBlok.innerHTML = `
        <div class="souhrn-obsah">
            <div class="souhrn-text">
                <h3>Celkový týdenní přehled</h3>
                <div class="souhrn-statistiky">
                    <div class="stat-box"><strong>${celkemKcal} kcal</strong><label>Spáleno celkem</label></div>
                    <div class="stat-box"><strong>${celkemCas} min</strong><label>Celkový čas</label></div>
                    <div class="stat-box"><strong>${tydenniCil} kcal</strong><label>Týdenní cíl</label></div>
                </div>
            </div>
            <div class="velky-kruh" style="background: conic-gradient(#2563eb ${procenta}%, #e2e8f0 0%);">
                <div class="velky-kruh-vnitrek">
                    <span class="procenta-cislo">${Math.round(procenta)}%</span>
                    <span class="procenta-label">Cíle</span>
                </div>
            </div>
        </div>
    `;
}
// Překreslení přehledu dnů (Využití Polymorfismu)
function aktualizujZobrazeni() {
    dnyKontejner.innerHTML = "";
    for (let i = 0; i < DNY_V_TYDNU.length; i++) {
        let den = DNY_V_TYDNU[i];
        let celkemKcal = 0;
        let aktivityHtml = "";
        let maAktivitu = false;
        for (let j = 0; j < pridaneAktivity.length; j++) {
            let akt = pridaneAktivity[j];
            if (akt.den === den) {
                celkemKcal = celkemKcal + akt.kalorie(); // Polymorfní volání
                aktivityHtml = aktivityHtml + `<li>${akt.zobraz()}</li>`; // Polymorfní volání
                maAktivitu = true;
            }
        }
        if (maAktivitu === false) {
            aktivityHtml = '<li class="prazdne">Žádné aktivity</li>';
        }
        let barva = "zelena";
        if (celkemKcal <= 200) {
            barva = "cervena";
        }
        else if (celkemKcal <= 350) {
            barva = "oranzova";
        }
        let procenta = (celkemKcal / 500) * 100;
        if (procenta > 100) {
            procenta = 100;
        }
        dnyKontejner.insertAdjacentHTML('beforeend', `
            <div class="den-karta">
                <div class="den-hlavicka">
                    <h4>${den}</h4>
                    <div class="kruh-skelet">
                        <div class="kruh ${barva}" style="background: conic-gradient(var(--barva-kruhu) ${procenta}%, #e2e8f0 0%);">
                            <div class="kruh-vnitrek"><span>${celkemKcal}<small>kcal</small></span></div>
                        </div>
                    </div>
                </div>
                <ul class="aktivity-list">
                    ${aktivityHtml}
                </ul>
            </div>
        `);
    }
    aktualizujTydenniSouhrn();
}
// Úvodní vykreslení prázdné tabulky při spuštění webu
aktualizujZobrazeni();
