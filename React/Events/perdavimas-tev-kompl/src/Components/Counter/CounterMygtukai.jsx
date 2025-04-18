
const CounterMygtukai = ({ buttons, props }) => {

    return (
        <div>
            {buttons.map((btn, i) => (
                <button key={i} onClick={() => props(btn.value)}>
                    {btn.text}
                </button>
            ))}
        </div>
    );
};

export default CounterMygtukai;
