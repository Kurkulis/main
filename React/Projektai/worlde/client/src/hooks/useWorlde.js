import { useState } from 'react';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); // kiekvienas spėjimas yra masyvas
    const [history, setHistory] = useState([]); // kiekvienas spėjimas yra string (naudojimui duplikavimo patikrinimui)
    const [isCorrect, setIsCorrect] = useState(false); // bus true tik kai atspėtas žodis, rodysim modal

    // formatuojame spėjimą kaip masyvą su raidžių objektais, pvz. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        // ...
    };

    // pridedame spėjimą į spėjimų būseną; jei spėjimas teisingas, atnaujiname isCorrect būseną; didiname atliktų spėjimų skaičių.
    const addNewGuess = () => {
        // ...
    };

    // keyup įvykio handle ir dabartinio spėjimo stebėjimas; jei paspaustas Enter, pridedame spėjimą
    const handleKeyup = () => {
        // ...
    };

    return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
