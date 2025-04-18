import { useRef } from "react";

const ZodziuIvedimas = ({ pridetiZodi }) => {

    const inputref = useRef();

    const submitHandle = (e) => {
        e.preventDefault();
        pridetiZodi(inputref.current.value)
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type="text" ref={inputref} />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default ZodziuIvedimas;
