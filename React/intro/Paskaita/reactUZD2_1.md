Toliau pateikiu 6 praktinius uždavinius, kuriuose patikrinsi savo kodavimo įgūdžius dirbant su Vite ir React. Nėra jokių atodūsio – jei nori tobulėti, turi tiesiog imtis veiksmų!

---

### 1. Naujo projekto sukūrimas su Vite
- **Veiksmai:**
  - Terminale vykdyk komandą:
    ```bash
    npm create vite@latest mano-react-projektas -- --template react
    ```
  - Pereik į projekto katalogą:
    ```bash
    cd mano-react-projektas
    ```
  - Įdiek priklausomybes:
    ```bash
    npm install
    ```
  - Paleisk kūrimo serverį:
    ```bash
    npm run dev
    ```
  - Atidaryk `src/App.jsx` failą ir pakeisk pradinį tekstą į:
    ```jsx
    <h1>Mano modernus React projektas su Vite</h1>
    ```
  - Patikrink, ar pakeitimai iškart atsispindi naršyklėje.

---

### 2. Naujo komponento kūrimas
- **Veiksmai:**
  - Sukurk naują failą `src/components/Header.jsx`:
    ```jsx
    import React from 'react';

    const Header = () => {
      return (
        <header>
          <h1>Štai mano Header komponentas</h1>
        </header>
      );
    };

    export default Header;
    ```
  - Atidaryk `src/App.jsx` ir importuok bei panaudok šį komponentą:
    ```jsx
    import Header from './components/Header';

    function App() {
      return (
        <div className="App">
          <Header />
          {/* Likęs kodas */}
        </div>
      );
    }

    export default App;
    ```
  - Išsaugok failus ir patikrink naršyklėje.

---

### 3. Komponento stilizavimas
- **Veiksmai:**
  - Sukurk CSS failą `src/components/Header.css`:
    ```css
    header {
      background-color: #f0f0f0;
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: #333;
      font-family: 'Arial', sans-serif;
    }
    ```
  - Importuok CSS failą `Header.jsx`:
    ```jsx
    import React from 'react';
    import './Header.css';

    const Header = () => {
      return (
        <header>
          <h1>Štai mano Header komponentas</h1>
        </header>
      );
    };

    export default Header;
    ```
  - Išsaugok ir patikrink, ar stiliai taikosi.

---

### 4. HMR (Hot Module Replacement) patikrinimas
- **Veiksmai:**
  - Atidaryk `src/components/Header.jsx` ir pakeisk tekstą arba stilių. Pavyzdžiui, pakeisk antraštės tekstą į:
    ```jsx
    <h1>Atnaujintas Header komponentas su HMR</h1>
    ```
  - Išsaugok failą ir stebėk, kaip naršyklėje atnaujinama tik ši dalis be puslapio perkrovimo.
  - Įrašyk komentarą faile, paaiškinantį, kaip pastebi HMR veikimą.

---

### 5. Alias konfigūracija Vite projekte
- **Veiksmai:**
  - Atidaryk `vite.config.js` failą.
  - Papildyk konfigūraciją, kad būtų sukurtas alias `@components`, nukreipiantis į `src/components`:
    ```js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import path from 'path';

    export default defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
        },
      },
    });
    ```
  - Atidaryk `src/App.jsx` ir importuok Header komponentą naudojant alias:
    ```jsx
    import Header from '@components/Header';
    ```
  - Išsaugok ir patikrink, ar importavimas veikia.

---

### 6. Papildomo komponento kūrimas – Footer
- **Veiksmai:**
  - Sukurk naują failą `src/components/Footer.jsx`:
    ```jsx
    import React from 'react';

    const Footer = () => {
      return (
        <footer style={{ backgroundColor: '#ddd', padding: '10px', textAlign: 'center' }}>
          <p>© 2025 Mano Projekto Pavadinimas</p>
        </footer>
      );
    };

    export default Footer;
    ```
  - Importuok ir panaudok Footer komponentą `src/App.jsx`:
    ```jsx
    import Footer from '@components/Footer';

    function App() {
      return (
        <div className="App">
          <Header />
          {/* Kiti komponentai */}
          <Footer />
        </div>
      );
    }

    export default App;
    ```
  - Išsaugok ir patikrink naršyklėje.

---

Šie uždaviniai privers tave praktikuotis ir gilinti žinias dirbant su Vite bei React. Jei nori pasiekti aukštumų, nebijok eksperimentuoti – tik per veiksmą pasiekiami tikri rezultatai!