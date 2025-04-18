import { useRef } from "react";

const ImoneIvedimas = ({ pridetiDarbuotoja }) => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const jobRef = useRef();
    const salaryRef = useRef();

    const submitHandle = (e) => {
        e.preventDefault();
        const darbuotojas = {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            job: jobRef.current.value,
            salary: +salaryRef.current.value,

        };
        pridetiDarbuotoja(darbuotojas);

        nameRef.current.value = "";
        surnameRef.current.value = "";
        jobRef.current.value = "";
        salaryRef.current.value = "";
    }

    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type="text" ref={nameRef} placeholder="name" />
                <input type="text" ref={surnameRef} placeholder="surname" />
                <input type="text" ref={jobRef} placeholder="job" />
                <input type="number" ref={salaryRef} placeholder="salary" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default ImoneIvedimas;


