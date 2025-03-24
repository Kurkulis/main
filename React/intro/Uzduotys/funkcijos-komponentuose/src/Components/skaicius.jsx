
const Skaicius = () => {
    let sk = 151;

    const arLyginis = (skc) => {
        return skc % 2 === 0 ? 'Lyginis' : 'Nelyginis';
    }

    const arTeigiamas = (sck) => {
        if (sck > 0) {
            return '>0'
        } else if (sck < 0) {
            return '<0'
        } else {
            return '=0'
        }
    }

    return (
        <div>
            <p>{sk}</p>
            <p>ar lyginis - {arLyginis(sk)}</p>
            <p>ar daugiau uz 0 - {arTeigiamas(sk)} </p>
        </div>
    )
}

export default Skaicius
