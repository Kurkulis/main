import { useEffect } from "react";
import useWordle from "../hooks/useWordle.js";
import Grid from "./Grid";
import Keypad from "./Keypad.jsx";

const Wordle = ({ solution }) => {
    const { currentGuess, handleKeyup, turn, guesses, isCorrect } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener(
            'keyup',
            handleKeyup
        );
    }, [handleKeyup]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect]);

    return (
        <>
            <h3> current guess --- {currentGuess} </h3>
            <Grid
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
            />
            <Keypad />
        </>
    );
}

export default Wordle;
