import useLocalStorage from "../Hooks/useLocalStorage";

const Komp4 = () => {

    const [storedValue, setValue] = useLocalStorage('kursas is costom hooks')

    const addDataWithoutHook = () => {
        localStorage.setItem('kursas', JSON.stringify('react mokymai'));
        window.localStorage.setItem('kursas-window', 'react mokymai');
    }

    const addDataWithHook = () => {
        setValue({
            vardas: 'jonas',
            role: 'admin'
        });

    }

    const reiksmesIsLocalStorage = () => {
        if (typeof storedValue === 'object') {
            return 'objektas'
        }

        return storedValue ? storedValue : 'duomenu nera';
    }

    return (
        <div>
            <h3>local storage pvz</h3>
            <button onClick={addDataWithoutHook}>add without hook</button>
            <button onClick={addDataWithHook}>add with hook</button>
            <p>{reiksmesIsLocalStorage()}</p>
        </div>
    )
};

export default Komp4;