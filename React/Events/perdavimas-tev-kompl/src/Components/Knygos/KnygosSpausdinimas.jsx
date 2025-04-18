
const KnygosSpausdinimas = ({ knyguSarasas }) => {



    return (
        <div>
            {knyguSarasas.length === 0 ? <p>nera duomenu</p> :
                <ul>
                    {knyguSarasas.map((knyga, i) => (
                        <li key={i}>
                            {knyga.name} – {knyga.price} € ({knyga.year})
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default KnygosSpausdinimas;
