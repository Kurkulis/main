import { useRef } from "react";

const KnygosIvedimas = ({ pridetiKnyga }) => {

    const nameRef = useRef();
    const priceRef = useRef();
    const yearRef = useRef();

    const submitHandle = (e) => {
        e.preventDefault();
        const knyga = {
            name: nameRef.current.value,
            price: +priceRef.current.value,
            year: +yearRef.current.value
        };
        pridetiKnyga(knyga);

        nameRef.current.value = "";
        priceRef.current.value = "";
        yearRef.current.value = "";
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type="text" ref={nameRef} placeholder="name" />
                <input type="text" ref={priceRef} placeholder="price" />
                <input type="text" ref={yearRef} placeholder="year" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default KnygosIvedimas;
