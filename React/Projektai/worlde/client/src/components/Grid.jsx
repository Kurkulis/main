import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {
    return (
        <>
            {
                guesses.map((guess, index) => {
                    if (turn === index) {
                        return <Row key={index} currentGuess={currentGuess} />
                    }
                    return <Row key={index} guess={guess} />
                })
            }
        </>
    )
};

export default Grid;
