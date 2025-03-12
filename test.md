## 2. Aplinkos paruošimas su Vite

### A. Teorinė dalis

#### 1. Kodėl Vite?  
- **Modernumas ir greitis:**  
  - **Vite** (iš pranc. „vėjas“) yra sukurta tam, kad kūrėjai galėtų susikoncentruoti į rašymą, o ne į sudėtingas konfigūracijų problemas. Vite pasitelkia ES modulines galimybes, kas leidžia atnaujinti tik tuos failus, kurie pakeisti, o ne visą aplikaciją.  
  - Tai reiškia, kad pokyčiai yra matomi beveik akimirksniu, o tai ypač svarbu pradedantiesiems – mažiau laukimo, daugiau veiksmų!

- **Paprasta konfigūracija:**  
  - Skirtingai nuo Webpack, kur daug laiko gali užtrukti konfigūracijos paruošimas, Vite veikia iškart „iš dėžutės“. Tai reiškia, kad net jei dar nesate susipažinę su sudėtingais bundleriais, galite tiesiog pradėti koduoti.
  - Konfigūracija paslėpta po kiautėmis – nereikia kopijuoti ar suprasti dešimtų eilučių sudėtingo konfigūracijos kodo.

- **HMR (Hot Module Replacement):**  
  - Viena didžiausių Vite privalumų – HMR, kuris leidžia atnaujinti modulius be puslapio perkrovimo.  
  - Tai reiškia, kad jei keičiate savo kodą, jūs matote pakeitimus realiu laiku – tai patirtis, kuri užtikrina, kad kūrimo procesas bus sklandus ir motyvuojantis.

- **Platus palaikymas:**  
  - Vite palaiko ne tik React, bet ir kitas technologijas (pvz., Vue, Svelte). Tačiau mūsų atveju mes koncentruojamės į React, nes tai labiausiai populiaru ir tinkama pradedantiesiems.
  - Daug oficialios dokumentacijos ir bendruomenės palaikymo, todėl jei kils klausimų – visada galima rasti atsakymų.

#### 2. Vite vs. Webpack: Kodėl pasirinkti Vite pradedantiesiems?  
- **Webpack iššūkiai:**  
  - Webpack yra labai galingas įrankis, tačiau jo konfigūracija gali būti sudėtinga, ypač kai pradedate naują projektą.  
  - Dažnai reikalinga papildoma laiko investicija į supratimą, kaip surinkti įvairius modulio tipus, o tai gali būti painu, jei tik pradėjote mokytis React.

- **Vite privalumai:**  
  - Minimalus konfigūravimas: Vite leidžia jums pradėti rašyti kodą beveik iš karto, nes pagrindiniai nustatymai jau paruošti.
  - Greitas startas: Net jei turite lėtą kompiuterį ar ribotus resursus, Vite užtikrina greitą aplikacijos paleidimą.
  - Aiškesnė architektūra: Vite palengvina supratimą, kaip modernios web aplikacijos veikia, nes mažiau "magijos" slypi už konfigūracijų, o daugiau dėmesio skiriama pačiam kodui.

#### 3. Išsamus Vite veikimo principų paaiškinimas  
- **Modulinis įkėlimas:**  
  - Vite naudoja naršyklės palaikymą ES modulams, todėl jūs neturite rūpintis sudėtingu bundling procesu iki kol norite pateikti produkcijos versiją.
  - Kai įvyksta HMR, tik tie failai, kurie pasikeitė, yra perkraunami, o ne visa aplikacija. Tai ne tik greitina kūrimo procesą, bet ir padeda lengviau sekti, kur tiksliai buvo atlikti pakeitimai.

- **Integracija su moderniais įrankiais:**  
  - Vite lengvai integruojasi su TypeScript, PostCSS, Babel ir kitomis technologijomis, kas ateityje leis jums plėsti projektą be didelių papildomų pastangų.
  - Tai yra kritiškai svarbu, nes supratimas, kaip veikia Vite, padeda jums lengviau persijungti prie kitų modernių įrankių, jei to kada nors prireiktų.

- **Bendruomenės ir dokumentacijos svarba:**  
  - Vite turi aktyvią bendruomenę, todėl jei kyla klausimų – galima greitai rasti sprendimus per oficialią dokumentaciją ar bendruomenės forumus.
  - Rekomenduojama peržiūrėti oficialų [Vite puslapį](https://vitejs.dev) ir „getting started“ vadovą, kad suprastumėte visus smulkmenų niuansus.

---

### B. Praktinė dalis

#### 1. Naujo projekto sukūrimo žingsnis po žingsnio  
- **Žingsnis 1: Projekto sukūrimas su Vite**  
  - Atidarykite terminalą (arba Visual Studio Code integruotą terminalą).  
  - Paleiskite komandą:
    ```bash
    npm create vite@latest mano-react-projektas -- --template react
    ```
  - **Kas vyksta:**  
    - Vite atsisiunčia reikiamą „template“ (šabloną) su jau paruošta React konfigūracija.
    - Šis šablonas apima minimalų React kodą, kuris leis jums pradėti dirbti iš karto.  
  - **Svarbu:**  
    - Atsiminkite – naujasis projektas turės aiškią struktūrą: paprastai `src` direktorijoje rasite pagrindinius failus, tokius kaip `App.jsx` ir `main.jsx`.

- **Žingsnis 2: Priklausomybių įdiegimas**  
  - Pereikite į sukurtą projekto direktoriją:
    ```bash
    cd mano-react-projektas
    ```
  - Įdiekite priklausomybes:
    ```bash
    npm install
    ```
  - **Ką tai reiškia:**  
    - Ši komanda įdiegs visus reikiamus paketų priklausomumus, kurie nurodyti `package.json` faile. Tai užtikrina, kad visi moduliai, reikalingi React ir Vite darbui, bus paruošti.

- **Žingsnis 3: Projekto paleidimas**  
  - Paleiskite kūrimo serverį:
    ```bash
    npm run dev
    ```
  - **Ką tikėtis:**  
    - Terminale turėtų pasirodyti informacija apie serverio paleidimą ir adresą (dažniausiai `http://localhost:5173`).
    - Atidarykite naršyklę ir įveskite tą adresą – turėtumėte matyti pradinį React šabloną, kuris yra visiškai funkcinis.

#### 2. Projekto struktūros išsiaiškinimas  
- **Direktorijų struktūra:**  
  - `src/` direktorija: čia bus jūsų visų komponentų, stilių ir logikos failai.  
    - `App.jsx`: pagrindinis komponentas, kuris atvaizduoja aplikaciją.  
    - `main.jsx`: įėjimo taškas, kuris prijungia React prie DOM.
  - `public/` direktorija: čia saugomi statiniai failai, pvz., paveikslėliai ar favicon.

- **Kodėl tai svarbu:**  
  - Aiški projekto struktūra padeda jums ir jūsų kolegoms lengvai rasti reikalingus failus, ypač kai projektas auga.
  - Gerai struktūruotas projektas sumažina klaidų atsiradimo tikimybę ir palengvina tolimesnį projektų plėtrą.

#### 3. Praktiški patarimai ir klaidų prevencija  
- **Naudokite Git nuo pat pradžių:**  
  - Versijų kontrolė padeda sekti pakeitimus ir atstatyti ankstesnes versijas, jei kažkas negerai.  
  - Komanda:  
    ```bash
    git init
    git add .
    git commit -m "Pradinis Vite React projekto sukūrimas"
    ```
  - **Nauda:**  
    - Laikysite savo darbą saugų ir turėsite galimybę atsekti, kada ir ką pakeitėte.

- **Eksperimentuokite su projekto failais:**  
  - Prieš pradėdami rašyti sudėtingą kodą, pabandykite keisti spalvas, tekstų išdėstymą ar net pridėti naujų elementų į `App.jsx`.
  - **Svarbu:**  
    - Jei kažkas neveikia – pasitikėkite savo žiniomis, patikrinkite terminalo pranešimus. Vite paprastai pateikia aiškius klaidų pranešimus, kurie padės jums greitai suprasti, kas negerai.

#### 4. Papildomi praktiniai uždaviniai  
- **Uždavinys 1:**  
  - **Tikslas:** Įsitikinti, kad suprantate projekto struktūrą ir kaip Vite veikia.
  - **Užduotis:** Atidarykite `src/App.jsx` ir pakeiskite pradinį tekstą į „Mano Pirmas Vite React Projektas“. Išsaugokite pakeitimus ir stebėkite, kaip naršyklėje atsispindi naujas tekstas.
  
- **Uždavinys 2:**  
  - **Tikslas:** Praktikuoti failų ir direktorijų struktūros pažinimą.
  - **Užduotis:** Sukurkite naują komponentą, pvz., `Header.jsx` su paprastu antraštės elementu. Importuokite ir panaudokite jį `App.jsx`. Pabandykite pakeisti antraštės spalvą per paprastą CSS taisyklę.
  
- **Uždavinys 3:**  
  - **Tikslas:** Patirti realaus laiko atnaujinimą naudojant HMR.
  - **Užduotis:** Eksperimentuokite keisdami vieną failą (pvz., `App.jsx`), stebėkite, kaip pokyčiai iškart atsispindi naršyklėje, ir apmąstykite, kodėl HMR yra toks naudingas (ypač kai mokotės ir bandote įvairius sprendimus).