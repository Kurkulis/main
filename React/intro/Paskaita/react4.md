## 4. Props, State ir Event Handling

### A. Teorinė dalis

#### 1. Props (Savivaldybės duomenų perdavimas)
  
- **Kas yra props?**  
  - *Pagrindinė sąvoka:* Props – tai savybės, kurias perduodame iš tėvinio (parent) komponento į jo vaikinius (child) komponentus.  
  - *Analogiškai:* Įsivaizduokite, kad tėvas perduoda vaikui laišką – laiške nurodoma informacija, kurią vaikas naudoja. Ši informacija niekada nėra keičiama vaiko pusėje.
  - *Vienkryptis srautas:* Duomenys perduodami tik nuo aukštesnio lygio į žemesnį, ir vaikinis komponentas negali tiesiogiai keisti gautų props.  
  - *Nauda:*  
    - Užtikrina duomenų vientisumą ir saugumą, nes komponentai nepriklauso vienas nuo kito tiesiogiai.
    - Palengvina pakartotinį komponentų naudojimą – sukurtą komponentą galima naudoti įvairiose aplikacijos vietose, tiesiog perduodant jam skirtingus props.

- **Kaip naudoti props?**  
  - *Paprastas pavyzdys:*  
    ```jsx
    function Sveikinimas({ vardas }) {
      return <h1>Sveikas, {vardas}!</h1>;
    }
    ```
    - Čia naudojame destruktūrizaciją, kad iš objekto išskirtume kintamąjį `vardas`.  
  - *Svarbios detalės:*  
    - **Immutability:** Props yra nekintami; jei reikia keisti duomenis, reikia naudoti state.
    - **Validacija:** Didesniuose projektuose galima naudoti bibliotekas kaip PropTypes ar TypeScript, kad tiksliai apibrėžtumėte, kokio tipo duomenys turėtų būti perduodami.

- **Diskusijos klausimai:**  
  - Kodėl svarbu, kad props būtų nekintami?  
  - Kaip props padeda kurti pakartotinai naudojamus komponentus?  
  - Kokie trūkumai gali kilti, jei vaikinis komponentas bandys keisti gautus props?

---

#### 2. State (Vidinė komponento būsena)

- **Kas yra state?**  
  - *Pagrindinė sąvoka:* State – tai vidinė duomenų saugykla, kuri priklauso konkrečiam komponentui ir gali keistis dėl vartotojo veiksmų ar kitų įvykių.  
  - *Analogiškai:* Įsivaizduokite, kad turite skaitiklį – jo reikšmė keičiasi priklausomai nuo to, kiek kartų paspaudžiate mygtuką. Ši reikšmė (state) yra unikali kiekvienam skaitikliui.
  - *Svarbūs aspektai:*  
    - **Asinchroniškumas:** State atnaujinimai gali būti asinchroniški, todėl kartais reikia atsižvelgti į tai, kad nauja vertė gali nebūti iškart prieinama.
    - **Naudojimas:** Paprastai naudojame `useState` hook funkcionaliuose komponentuose:
      ```jsx
      import { useState } from 'react';

      function Skaitiklis() {
        const [count, setCount] = useState(0);
        return (
          <div>
            <p>Paspaudimų skaičius: {count}</p>
            <button onClick={() => setCount(count + 1)}>Spausti mane</button>
          </div>
        );
      }
      ```
  - *Nauda:*  
    - Leidžia kurti interaktyvias aplikacijas, kurios reaguoja į vartotojo įvestis ir kitas sąlygas realiu laiku.
    - Padeda atskirti nuolat kintančius duomenis nuo statinio turinio (kurį perduodame per props).

- **Svarbios detalės:**  
  - **State ir props skirtumai:**  
    - Props yra perduodami iš išorės ir yra nekintami, o state yra vidiniai duomenys, kurie keičiasi.  
    - Naudojant state, reikia žinoti, kad kiekvienas atnaujinimas sukelia viso komponento perkrovimą (render).
  - **Gerųjų praktikos patarimai:**  
    - Rinkitės kuo mažiau state kintamųjų, kad sumažintumėte sudėtingumą.  
    - Struktūruokite state taip, kad kiekvienas kintamasis turėtų aiškią atsakomybę.

- **Diskusijos klausimai:**  
  - Kuo state skiriasi nuo props ir kodėl kiekviena sąvoka yra svarbi?  
  - Kaip asinchroninis state atnaujinimas gali paveikti jūsų logiką?  
  - Kokie būtų pavyzdžiai, kai state naudojimas yra būtinas, o props – nepakankami?

---

#### 3. Event Handling (Įvykių valdymas)

- **Kas yra event handling?**  
  - *Pagrindinė sąvoka:* Event handling – tai mechanizmas, leidžiantis React atpažinti ir apdoroti vartotojo įvykius (pvz., paspaudimus, įvedimus, pele pakėlimus ir pan.).  
  - *Analogiškai:* Įsivaizduokite, kad jūsų telefonas reaguoja į prisilietimus – kiekvienas prisilietimas sukelia tam tikrą veiksmą. Taip pat ir React reaguoja į vartotojo veiksmus.
  
- **Kaip priskirti įvykių tvarkytojus:**  
  - Naudojame atributus, tokius kaip `onClick`, `onChange`, `onMouseOver` ir pan.  
  - *Pavyzdys:*
    ```jsx
    function Pasveikinimas({ vardas }) {
      const handleClick = () => {
        alert(`Labas, ${vardas}!`);
      };

      return <button onClick={handleClick}>Pasveikinti</button>;
    }
    export default Pasveikinimas;
    ```
    - Šiame pavyzdyje, kai paspaudžiamas mygtukas, įvykdomas `handleClick` funkcijos turinys.
  
- **Svarbios detalės:**  
  - **Funkcijų perdavimas:** Jei reikia perduoti parametrus, naudokite bevardę funkciją (arrow function), kad funkcija nevykdytųsi iškart:
    ```jsx
    <button onClick={() => handleClick(vardas)}>Pasveikinti</button>
    ```
  - **Bind metodo naudojimas:** Senesniuose klasės komponentuose dažnai reikėjo naudoti `.bind(this)`, tačiau funkcionaliuose komponentuose naudojant hooks – pakankamai naudoti arrow funkcijas.
  - **Gerųjų praktikos patarimai:**  
    - Visada aiškiai apibrėžkite, kas vyksta įvykio metu, kad kiti programuotojai suprastų logiką.  
    - Skirkite funkcijas tam, kad neperkrautumėte JSX kodo – iškelkite į atskiras funkcijas, jei funkcionalumas tampa per sudėtingas.
  - **Svarbu:** Įvykiai vyksta sinchroniškai, todėl svarbu užtikrinti, kad funkcijos, kurios keičia state, būtų parašytos aiškiai ir neliktų pasikartojančios logikos.

- **Diskusijos klausimai:**  
  - Kodėl svarbu naudoti arrow funkcijas perduodant parametrus į event handlers?  
  - Kokios yra galimos klaidos, jei neteisingai priskiriate event handlers?  
  - Kaip galima tvarkyti kelis įvykius tame pačiame elemente ir kokia yra geriausia praktika tai pasiekti?

---

### B. Praktinė dalis

#### 1. Užduotis: Dinamiškas skaitiklio komponentas

- **Tikslas:** Praktikuoti state valdymą, event handling ir props panaudojimą viename realiu pavyzdyje.  
- **Užduotis:**  
  - Sukurkite komponentą, pavadinkite jį `Skaitiklis.jsx`, kuriame:  
    - Pradiniame etape gausite pradines reikšmes per props (pvz., pradinį skaičių).  
    - Naudodami `useState`, valdysite skaitiklio reikšmę.  
    - Pridėkite mygtuką, paspaudus kurį skaitiklio reikšmė padidės.
  
- **Pavyzdinis kodas:**
  ```jsx
  import { useState } from 'react';

  function Skaitiklis({ pradinisSkaicius }) {
    // Inicializuojame state su pradine reikšme, perduota per props
    const [skaicius, setSkaicius] = useState(pradinisSkaicius);

    // Event handler funkcija, kuri didina skaičių
    const padidinti = () => {
      setSkaicius(skaicius + 1);
    };

    return (
      <div>
        <p>Paspaudimų skaičius: {skaicius}</p>
        <button onClick={padidinti}>Padidinti</button>
      </div>
    );
  }

  export default Skaitiklis;
  ```
- **Instrukcijos:**  
  - Sukurkite naują failą `Skaitiklis.jsx` ir įkelkite aukščiau pateiktą kodą.
  - Į `App.jsx` importuokite ir panaudokite komponentą:
    ```jsx
    import Skaitiklis from './Skaitiklis';

    function App() {
      return (
        <div className="app">
          <h1>React Praktika</h1>
          <Skaitiklis pradinisSkaicius={0} />
        </div>
      );
    }

    export default App;
    ```
- **Patarimai:**  
  - Eksperimentuokite keisdami pradines reikšmes per props.  
  - Stebėkite, kaip state atnaujinamas kiekvieno paspaudimo metu, ir aptarkite asinchroninio setState pobūdį.

---

#### 2. Užduotis: Įvykių tvarkymas su daugiau veiksmų

- **Tikslas:** Gilinti supratimą, kaip tvarkyti kelis įvykius ir perduoti parametrus event handleriams.
- **Užduotis:**  
  - Sukurkite komponentą, pavadinkite jį `Veiksmai.jsx`, kuriame:  
    - Bus du mygtukai – vienas atvaizduos pranešimą „Labas“, o kitas – pranešimą „Ate“.
    - Naudokite vieną event handler funkciją, kuri priima parametrą, ir pagal tą parametrą vykdo atitinkamą veiksmą (pvz., iškviečia alert su pranešimu).
- **Pavyzdinis kodas:**
  ```jsx
  function Veiksmai() {
    // Bendro pobūdžio funkcija, kuri priima pranešimą
    const parodytiPranesima = (pranesimas) => {
      alert(pranesimas);
    };

    return (
      <div>
        <button onClick={() => parodytiPranesima("Labas!")}>Labas</button>
        <button onClick={() => parodytiPranesima("Ate!")}>Ate</button>
      </div>
    );
  }

  export default Veiksmai;
  ```
- **Instrukcijos:**  
  - Sukurkite failą `Veiksmai.jsx` su aukščiau pateiktu kodu.
  - Į `App.jsx` importuokite ir naudokite šį komponentą, kad pamatytumėte, kaip vienas event handler gali apdoroti kelis veiksmus, priklausomai nuo perduoto parametro.
- **Patarimai:**  
  - Pabandykite pridėti daugiau mygtukų su skirtingais pranešimais, kad įsitikintumėte, kaip veikia parametrų perdavimas.
  - Pabandykite keisti funkcijos struktūrą: pavyzdžiui, iškelkite funkciją į atskirą kintamąjį virš return bloko ir aptarkite, kodėl tai gali būti naudingiau dideliuose projektuose.

---

#### 3. Užduotis: Kombinuotas uždavinys – props, state ir event handling kartu

- **Tikslas:** Sujungti visus ankstesnius konceptus į vieną funkcionalų komponentą.
- **Užduotis:**  
  - Sukurkite komponentą, pavadinkite jį `DinaminisSarasas.jsx`, kuris atliks šiuos veiksmus:
    - Gaus pradinį masyvą elementų per props.
    - Naudos state, kad galėtų dinamiškai keisti sąrašo turinį (pvz., pridėti naują elementą).
    - Turės formos laukelį ir mygtuką, kurių pagalba vartotojas galės įvesti naują elementą į sąrašą.
    - Naudos event handling, kad užtikrintų, jog paspaudus mygtuką, įvedamas tekstas būtų įtrauktas į state, o sąrašas atnaujinamas.
- **Pavyzdinis kodas:**
  ```jsx
  import { useState } from 'react';

  function DinaminisSarasas({ pradiniaiElementai }) {
    const [elementai, setElementai] = useState(pradiniaiElementai);
    const [naujasElementas, setNaujasElementas] = useState("");

    // Įvykio tvarkytojas, atnaujinantis input lauką
    const handleInputChange = (e) => {
      setNaujasElementas(e.target.value);
    };

    // Funkcija, kuri prideda naują elementą į sąrašą
    const pridetiElementa = () => {
      if (naujasElementas.trim() !== "") {
        setElementai([...elementai, naujasElementas]);
        setNaujasElementas("");
      }
    };

    return (
      <div>
        <h2>Dinaminis Sąrašas</h2>
        <ul>
          {elementai.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={naujasElementas}
          onChange={handleInputChange}
          placeholder="Įveskite naują elementą"
        />
        <button onClick={pridetiElementa}>Pridėti</button>
      </div>
    );
  }

  export default DinaminisSarasas;
  ```
- **Instrukcijos:**  
  - Sukurkite naują failą `DinaminisSarasas.jsx` ir įklijuokite aukščiau pateiktą kodą.
  - Į `App.jsx` importuokite `DinaminisSarasas` ir perduokite pradinius elementus per props, pvz.:
    ```jsx
    import DinaminisSarasas from './DinaminisSarasas';

    function App() {
      const pradiniaiElementai = ["Elementas 1", "Elementas 2"];
      return (
        <div className="app">
          <h1>React Praktikos Pavyzdžiai</h1>
          <DinaminisSarasas pradiniaiElementai={pradiniaiElementai} />
        </div>
      );
    }

    export default App;
    ```
- **Patarimai:**  
  - Eksperimentuokite – bandykite ištrinti elementus ar keisti jų tvarką, jei jau įgyvendinote pradinį funkcionalumą.  
  - Aptarkite su kolegomis, kaip props, state ir event handling kartu padeda kurti interaktyvias aplikacijas.