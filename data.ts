window.onload = () => {
  const testData = [
    new (window as any).Kardio("Beh", 30, 5),
    new (window as any).Kardio("Kolo", 60, 20),
    new (window as any).Silovy("Drepy", 40, 80)
  ];

  const output = document.getElementById("output")!;

  for (const a of testData) {
    const p = document.createElement("p");
    p.textContent = `TEST: ${a.zobraz()}`;
    output.appendChild(p);
  }
};