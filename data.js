"use strict";
window.onload = () => {
    const testData = [
        new window.Kardio("Beh", 30, 5),
        new window.Kardio("Kolo", 60, 20),
        new window.Silovy("Drepy", 40, 80)
    ];
    const output = document.getElementById("output");
    for (const a of testData) {
        const p = document.createElement("p");
        p.textContent = `TEST: ${a.zobraz()}`;
        output.appendChild(p);
    }
};
