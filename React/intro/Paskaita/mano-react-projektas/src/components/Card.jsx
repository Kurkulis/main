import { useState } from "react";



function Card({ title, children }) {

const [counter, setCounter] = useState(10);  

    return (    
        <div className="card">
        <h2 onClick={()=>{setCounter(counter-1)}} >{title}</h2>
        <h3>{counter}</h3>
        <p>{children} </p>
        </div>
    );  
}

export default Card;