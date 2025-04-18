
const ImoneSpausdinimas = ({ darbuotojuSarasas }) => {



    return (
        <div>
            {darbuotojuSarasas.length === 0 ? <p>nera duomenu</p> :
                <ul>
                    {darbuotojuSarasas.map((d, i) => (
                        <li key={i}>
                            {d.name} {d.surname} {d.job} {d.salary} €
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default ImoneSpausdinimas;
