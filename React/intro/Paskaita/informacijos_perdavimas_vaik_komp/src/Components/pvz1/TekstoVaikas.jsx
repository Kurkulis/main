
const TekstoVaikas = (props) => {

    return (
        <div>
            <p>Gautas tekstas:
                {props.tekstas ? <strong>{props.tekstas}</strong> : ''}
            </p>
        </div>
    );
};

export default TekstoVaikas;