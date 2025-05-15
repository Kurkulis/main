import { useState } from 'react';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]); // kiekvienas spėjimas yra masyvas
    const [history, setHistory] = useState([]); // kiekvienas spėjimas yra string (naudojimui duplikavimo patikrinimui)
    const [isCorrect, setIsCorrect] = useState(false); // bus true tik kai atspėtas žodis, rodysim modal

    // formatuojame spėjimą kaip masyvą su raidžių objektais, pvz. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {
        const solutionArray = [...solution];
        const formattedGuess = [...currentGuess]
            .map((letter) => {
                return { key: letter, color: 'grey' }
            });
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green';
                solutionArray[index] = null;
            }
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        });
        return formattedGuess;
    }
    // pridedame spėjimą į spėjimų būseną; jei spėjimas teisingas, atnaujiname isCorrect būseną; didiname atliktų spėjimų skaičių.
    const addNewGuess = (formattedGuess) => {
        if (currentGuess == solution) {
            setIsCorrect(true);
        }
        setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
        setHistory((prev) => [...prev, currentGuess]);
        setTurn((prev) => prev + 1);
        setCurrentGuess("");
    };
    // keyup įvykio handle ir dabartinio spėjimo stebėjimas; jei paspaustas Enter, pridedame spėjimą
    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            if (turn > 5 || history.includes(currentGuess) || currentGuess.length !== 5) {
                return;
            }
            formatGuess();
        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));
            return;
        }
        if (/^[a-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key)
            }
            return;
        }
    };
    return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
