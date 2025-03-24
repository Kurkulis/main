## 3. Komponentai ir JSX 

### A. Teorinė dalis

#### 1. Komponentų esmė  
- **Kas yra komponentas?**  
  - **Apibrėžimas:** Komponentas – tai atkuriamas kodo blokas, dažniausiai parašytas kaip funkcija, kuri grąžina JSX (tai panašu į HTML).  
  - **Analogiška situacija:** Įsivaizduokite Lego kaladėles – kiekviena kaladėlė turi savo funkciją, o kartu jos sudaro visą pastatą. Tai leidžia lengvai pakeisti ar atnaujinti tik vieną dalį, nekeisdami viso pastato.  
  - **Kodėl svarbu:**  
    - **Moduliškumas:** Kiekvienas komponentas atlieka vieną užduotį, todėl lengviau valdyti dideles programas.  
    - **Pakartotinis naudojimas:** Sukurtą komponentą galima naudoti daugiau nei vieną kartą visoje aplikacijoje, taupant laiką ir sumažinant klaidų tikimybę.

#### 2. JSX paaiškinimas  
- **Kas yra JSX?**  
  - **Sintaksė:** JSX yra sintaksinė išplėtimų kalba, kuri atrodo kaip HTML, bet leidžia integruoti JavaScript logiką.  
  - **Kodėl naudojame:**  
    - Supaprastina rašymą – rašome HTML panašų kodą, bet turime prieigą prie JavaScript galimybių (pvz., kintamųjų, funkcijų, sąlygų).  
    - Gerai matyti struktūrą – komponento turinys aiškiai atskleidžia, kokius elementus jis atvaizduoja.
  - **Svarbūs niuansai:**  
    - Naudokite `className` vietoje `class`, nes `class` yra rezervuotas JavaScript žodis.
    - Įterpkite kintamuosius ir logiką naudodami `{}`. Pavyzdžiui, jei turite kintamąjį `vardas`, jį įterpkite taip: `<h1>Sveikas, {vardas}!</h1>`.

#### 3. Virtualus DOM ir React veikimo principai  
- **Virtualus DOM:**  
  - **Kas tai?**: React sukuria virtualų DOM – lengvą atminties kopiją, kuri saugo visas JSX struktūras.  
  - **Kaip veikia:** Kai pakeičiate komponentą, React lygina naują virtualų DOM su ankstesniu ir atnaujina tik tas dalis, kurios pasikeitė.  
  - **Privalumai:**  
    - Mažiau realaus DOM modifikacijų, todėl programos veikimas yra greitas ir efektyvus.
    - Aiškus atnaujinimų procesas, kuris padeda sumažinti klaidų riziką.
- **Reali analogija:**  
  - Palyginkite su piešimo patobulinimu ant skaidraus lapo – nekeičiate viso paveikslo, tik nedidelės detalės.

#### 4. Komponentų tipai ir struktūrizavimas  
- **Funkciniai komponentai vs. klasės komponentai:**  
  - **Funkciniai komponentai:**  
    - Rašomi kaip paprastos JavaScript funkcijos.
    - Dabar rekomenduojami dėl aiškumo ir paprastesnės sintaksės, ypač su hooks (pvz., useState, useEffect).  
  - **Klasės komponentai:**  
    - Naudojami senesniuose projektuose; turi daugiau sintaksinių reikalavimų, pvz., render metodą.
    - Daugeliu atvejų nerekomenduojami, nes funkcionalūs komponentai yra modernesni ir lengviau tvarkomi.
- **Komponentų hierarchija:**  
  - **Struktūra:** Didelę aplikaciją galima suskaidyti į kelis subkomponentus (pvz., Header, Sidebar, Main, Footer).
  - **Nauda:** Aiškesnė kodo organizacija, lengvesnis kodo palaikymas ir testavimas.
- **Gerosios praktikos:**  
  - Rašykite kiekvieną komponentą taip, kad jis atliktų vieną konkrečią užduotį.
  - Pavadinimai turi būti aiškūs – pvz., „UserProfile“ vietoje „Profile1“.
  - Jei komponentas turi atskirą logiką, išskaidykite ją į smulkesnes funkcijas, kad kodas būtų skaidrus.

#### 5. Diskusijos ir klausimai teorinei daliai  
- **Klausimas 1:** Kuo komponentų atskyrimas palengvina programos valdymą ir priežiūrą?  
- **Klausimas 2:** Kodėl JSX, turintis HTML panašią sintaksę, yra pranašesnis nei grynas JavaScript manipuliavimas DOM?  
- **Klausimas 3:** Paaiškinkite, kaip virtualus DOM prisideda prie programos našumo ir efektyvumo.

---

### B. Praktinė dalis

#### 1. Pirmasis praktinis uždavinys: Paprasta svetainės struktūra  
- **Tikslas:** Suprasti, kaip skirtingi komponentai gali sudaryti vieną pilną aplikaciją.  
- **Užduotis:**  
  - Sukurkite naują projektą (jei dar nesukūrėte) per Vite ir atidarykite `App.jsx`.
  - Sukurkite tris naujus komponentus:
    - **Header.jsx:** Turėtų rodyti svetainės pavadinimą ir paprastą navigaciją.  
    - **MainContent.jsx:** Rodyti pagrindinį turinį, pvz., pasisveikinimo pranešimą.  
    - **Footer.jsx:** Turėtų rodyti poraštę (pvz., © 2025, Visos teisės saugomos).
- **Pavyzdinis kodas:**  
  ```jsx
  // Header.jsx
  function Header() {
    return (
      <header className="header">
        <h1>Mano Svetainė</h1>
        <nav>
          <ul>
            <li>Pradžia</li>
            <li>Apie</li>
            <li>Kontaktai</li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header;
  ```
  ```jsx
  // MainContent.jsx
  function MainContent() {
    const sveikinimas = "Sveiki atvykę į mano svetainę!";
    return (
      <main className="main-content">
        <p>{sveikinimas}</p>
      </main>
    );
  }
  export default MainContent;
  ```
  ```jsx
  // Footer.jsx
  function Footer() {
    return (
      <footer className="footer">
        <p>© 2025, Visos teisės saugomos.</p>
      </footer>
    );
  }
  export default Footer;
  ```
  ```jsx
  // App.jsx
  import Header from './Header';
  import MainContent from './MainContent';
  import Footer from './Footer';

  function App() {
    return (
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }

  export default App;
  ```

#### 2. Dinamiškumo pridėjimas naudojant kintamuosius ir JSX  
- **Tikslas:** Suprasti, kaip įterpti JavaScript kintamuosius į JSX.  
- **Užduotis:**  
  - Atidarykite `MainContent.jsx` ir pakeiskite paprastą pranešimą į dinaminį tekstą, naudojant kintamąjį.  
- **Pavyzdinis kodas:**  
  ```jsx
  function MainContent() {
    const sveikinimas = "Sveiki atvykę į mano svetainę!";
    const papildomaInfo = "Ši svetainė skirta mokytis React!";
    return (
      <main className="main-content">
        <p>{sveikinimas}</p>
        <p>{papildomaInfo}</p>
      </main>
    );
  }
  export default MainContent;
  ```
- **Paaiškinimas:**  
  - Kintamųjų įterpimas leidžia lengvai keisti turinį, be būtinybės nuolat modifikuoti gryną HTML.

#### 3. Sąrašų atvaizdavimas naudojant ciklą  
- **Tikslas:** Išmokti, kaip sukurti komponentus, kurie atvaizduoja sąrašus dinamiškai.  
- **Užduotis:**  
  - Sukurkite naują komponentą `ItemList.jsx`, kuris atvaizduoja sąrašą elementų (pvz., prekių ar kontaktų sąrašą).  
  - Naudokite JavaScript metodą `map` norėdami iteruoti per masyvą.
- **Pavyzdinis kodas:**  
  ```jsx
  function ItemList() {
    const items = ["Pirmas elementas", "Antras elementas", "Trečias elementas"];
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  export default ItemList;
  ```
- **Svarbu:**  
  - Naudokite `key` atributą – jis padeda React identifikuoti kiekvieną sąrašo elementą, ypač svarbu, kai sąrašas keičiasi dinamiškai.

#### 4. Papildomas uždavinys: Sąlygų naudojimas JSX  
- **Tikslas:** Suprasti, kaip sąlygos veikia JSX ir kaip vykdyti sąlygų pagrindu skirtingą atvaizdavimą.  
- **Užduotis:**  
  - Modifikuokite `ItemList.jsx` komponentą taip, kad jei masyvas yra tuščias, būtų rodomas pranešimas „Nėra duomenų“.
- **Pavyzdinis kodas:**  
  ```jsx
  function ItemList() {
    const items = []; // Pabandykite pakeisti į ne tuščią masyvą ir stebėkite skirtumą.
    return (
      <div>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Nėra duomenų</p>
        )}
      </div>
    );
  }
  export default ItemList;
  ```