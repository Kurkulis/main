import { useEffect, useState } from "react";
import Wordle from "./Wordle";

const API_URL = 'http://localhost:3000/solutions'

const WordList = () => {
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(json => {

                const randomSolution = json[Math.floor(Math.random() * json.length)];
                setSolution(randomSolution.word);
            });
    }, [setSolution]);

    return (
        <div className="solution">
            {solution && <h2>{solution}</h2>}

            {solution && <Wordle solution={solution} />}
        </div>
    );
};

export default WordList;
