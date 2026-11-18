// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.

//   filter välja ut några element      map Omvandla alla element      find hitta ett värde
//   reduce få ett värde ur listan      sort ordna i annan ordning

// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
// Skriv I `src/meny.ts`: skriv `vegetariskaRatter` (filter), `rattNamn`
// (map) och `prislista` (map som använder `formateraPris` importerad från `src/pris.ts`). Ladda om testsidan efter varje funktion. Commit när de tre är gröna.

import { formateraPris } from './pris'
import type { Ratt, OrderRad } from './typer'

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
    // TODO
    //sort
    // console.log(`{meny.filter(ratt=>ratt.vegetarisk) } `)
    return meny.filter((ratt) => ratt.vegetarisk)
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
    // TODO
    //map
    return meny.map((ratt) => ratt.namn)
}
/*
const liten: Ratt[] = [
  { id: 1, namn: "Bulle", pris: 35, kategori: "bakverk", vegetarisk: true },
  { id: 2, namn: "Kaffe", pris: 32, kategori: "dryck", vegetarisk: true },
  { id: 3, namn: "Skinkmacka", pris: 62, kategori: "lunch", vegetarisk: false },
];
*/

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
    // TODO
    //map
    return meny.map((ratt) => ratt.namn + ' – ' + formateraPris(ratt.pris))
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
    // TODO
    return meny.find((ratt) => ratt.id === id)
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
    // TODO
    if (meny.length === 0) {
        return undefined
    }

    //let prevDish: string = meny.pris
    return meny.reduce((prevDish, ratt) => {
        if (ratt.pris < prevDish.pris) {
            return ratt
        }
        return prevDish //om tidigare är billigare
    })

    //förväntade[2,1,3]  fick [1 ,2,3 ]

    //return meny.reduce((prevDish, ratt) => {
    //   return ratt.pris < prevDish.pris ? ratt : prevDish
    //});
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
    // TODO
    return [...meny].sort((a, b) => a.pris - b.pris)
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
    // TODO
    return order.reduce((summa, rad) => {
        const ratt = meny.find((r) => r.id === rad.id)
        const pris = ratt ? ratt.pris : 0
        return summa + pris * rad.antal
    }, 0)
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)

//export gör funktionen tillgänglig för andra filer test.ts behöver denna för att rätta
//meny namn på variabel ,   Ratt[]  typescript talar om datatyp Ratt object  [] array lista av såda object
//                                 { bakverk: 3, dryck: 2, lunch: 3 }

//                            : Record<string, number> Returnera ett object där nycklarna är Text, nummer   tex dryck, 2)
//javascript{bakverk:3, dryck:2, lunch: 3 }
export function perKategori(meny: Ratt[]): Record<string, number> {
    // TODO
    /*
    return meny.reduce(
        (acc, ratt) => {
            acc[ratt.kategori] = (acc[ratt.kategori] || 0) + 1
            return acc
        },
        {} as Record<string, number>
    )*/

    //Börja med tomt objekt och döper till resultat
    //meny.reduce... startar en loop som går igenom varje rätt i listan meny
    //return skickar hela resultatet när loopen är klar

    return meny.reduce((resultat: Record<string, number>, ratt) => {
        const kategori = ratt.kategori

        //om kategori finns i vårt resultat objekt plussa med 1
        if (resultat[kategori]) {
            resultat[kategori] = resultat[kategori] + 1
        } else {
            //skapa kategori ochh sätt den till 1
            resultat[kategori] = 1
        }
        return resultat
    }, {})
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
    // TODO

    return {
        ...ratt,
        pris: nyttPris
    }
}
