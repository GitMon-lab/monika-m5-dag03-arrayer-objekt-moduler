/*Skapa en ny fil `src/rabatt.ts` med en exporterad funktion `studentPris(pris)` (10 % rabatt).
Importera den i `src/main.ts` och använd den på menyn.
Prova sedan tre fel med flit och läs felen: ta bort `type="module"` i `index.html`,
skriv fel filnamn i `import`, och öppna `index.html`
genom att dubbelklicka (utan servern). Skriv vad varje fel betydde.*/

export function studentPris(pris: number) {
    return pris * 0.9
}
