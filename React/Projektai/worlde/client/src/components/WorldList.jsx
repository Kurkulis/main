import { useEffect, useState } from "react";

const WordList = () => {
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        fetch('http://localhost:6000/solutions')
            .then(res => res.json())
            .then(json => {
                const randomSolution = json[Math.floor(Math.random() * json.length)];
                setSolution(randomSolution.word);
            });
    }, [setSolution]);

    return (
        <div className="solution">
            {solution && <div>The Word is {solution}</div>}
        </div>
    );
};

export default WordList;
