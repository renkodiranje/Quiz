pitanje1 = {
  tekst:
    " Kako se zove stari trgovački deo grada Sarajeva koji je nastao u periodu osmanske vladavine u Bosni I Hercegovini?",
  odgovori: ["Bentbaša", "Alipašino polje", "Čengić Vila", "Baščaršija"],
  indeks_korektnog_odgovora: 3,
};

pitanje2 = {
  tekst: "Kako se zove svemirski teleskop lansiran u orbitu 2022. godine?",
  odgovori: ["Habl", "Džejms Veb", "Armstrong"],
  indeks_korektnog_odgovora: 1,
};

pitanje3 = {
  tekst:
    "Mariano Chico Frumboli je uticajni  argentinski tangeroš. Ko je njegova plesna partnerka?",
  odgovori: ["Lorena Tarantino", "Juana Sepulveda", "Geraldina Rojas"],
  indeks_korektnog_odgovora: 1,
};

pitanje4 = {
  tekst: " U kom bendu je Masimo Savić započeo karijeru?",
  odgovori: ["Dorijan Grej", "Lovac u žitu", "Haklberi Fin"],
  indeks_korektnog_odgovora: 0,
};

pitanje5 = {
  tekst:
    "Kojim od navedenih sportova se rekreativno bavi naš svetski priznati violinista Stefan Milenković?",
  odgovori: ["Skijanjem", "Streljaštvom", "Padobranstvom"],
  indeks_korektnog_odgovora: 2,
};

pitanje6 = {
  tekst: "Šta proučava farmakognozija?",
  odgovori: [
    "Prirodne lekove biljnog, životinjskog i mineralnog porekla.",
    "Izgled, građu, rast, razviće, reprodukciju, metabolizam, fiziologiju, oboljenja, ekologiju, srodnost i evolutivnu istoriju biljaka.",
    "Metode lečenja primenom lekovitog bilja.",
  ],
  indeks_korektnog_odgovora: 0,
};

pitanje7 = {
  tekst:
    "Praćenje bezbednosti lekova nakon njihovog stavljanja u promet naziva se:",
  odgovori: ["Farmakoepidemiologija", "Farmakokinetika", "Farmakovigilanca"],
  indeks_korektnog_odgovora: 2,
};

pitanje8 = {
  tekst: "Šta predstavlja standardna devijacija u statistici?",
  odgovori: [
    "Aritmetičku sredinu",
    "Vrednost za koju u proseku elementi skupa odstupaju od aritmetičke sredine skupa.",
  ],
  indeks_korektnog_odgovora: 1,
};

pitanje9 = {
  tekst: "Šta od navedenog prevozi parobrod u pesmi 'Šejn' grupe Haustor?",
  odgovori: ["Svilu", "So", "Začine"],
  indeks_korektnog_odgovora: 1,
};

pitanje10 = {
  tekst: "Šta je od navedenog nije emulzija:",
  odgovori: ["Mleko", "Maslac", "Majnez", "Sok"],
  indeks_korektnog_odgovora: 3,
};

niz_pitanja = [
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
  pitanje10,
];

function permutacija() {
  for (let i = niz_pitanja.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    let y = niz_pitanja[i];
    niz_pitanja[i] = niz_pitanja[x];
    niz_pitanja[x] = y;
  }
}
permutacija();

let za_dugmad = document.createElement("h5");
za_dugmad.style.margin = "0 25%";

let posalji = document.createElement("input");
posalji.setAttribute("type", "button");
posalji.setAttribute("value", "Posalji odgovore");
posalji.classList.add("pos");

let nova = document.createElement("input");
nova.setAttribute("type", "reset");
nova.setAttribute("value", "Nova pitanja");
nova.classList.add("np");
nova.addEventListener("click", () => {
  location.reload();
  window.scrollTo(0, 0);
});

let par = document.createElement("p");
//par.style.margin = "0 25%";
let forma = document.createElement("form");

for (let i = 0; i < 5; i++) {
  let naslov = document.createElement("h2");
  naslov.textContent += `${i + 1}. ${niz_pitanja[i].tekst}`;
  let red = document.createElement("div");
  red.append(naslov);

  for (let j = 0; j < niz_pitanja[i].odgovori.length; j++) {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");

    let label = document.createElement("label");
    label.setAttribute("for", `odgovor${i}`);
    radio.setAttribute("name", `odgovor${i}`);
    radio.setAttribute("value", `${j}`);
    let paragraf = document.createElement("p");
    label.textContent += niz_pitanja[i].odgovori[j];

    if (j == 0) {
      radio.setAttribute("checked", "true");
    }

    posalji.addEventListener("click", () => {
      radio.setAttribute("disabled", true);
      posalji.disabled = true;

      window.scrollTo(0, 1300);

      if (radio.checked == true) {
        if (radio.value == niz_pitanja[i].indeks_korektnog_odgovora) {
          par.innerHTML += `<p style="color:green;">Tačno ste odgovorili na ${
            i + 1
          }. pitanje<p>`;
        } else {
          par.innerHTML += `<p style="color:red;">Niste tačno odgovorili na ${
            i + 1
          }. pitanje<p>`;
        }
      }
    });

    paragraf.append(radio);
    paragraf.append(label);
    red.append(paragraf);
  }
  forma.append(red);
}
posalji.addEventListener("click", () => {
  par.scrollIntoView();
});
document.body.append(forma);
za_dugmad.append(posalji);
za_dugmad.append(nova);
document.body.append(za_dugmad);
par.classList.add("poruka");
par.style.boxShadow = "5px 5px 10px 8px rgb(231, 168, 10)";
document.body.append(par);
