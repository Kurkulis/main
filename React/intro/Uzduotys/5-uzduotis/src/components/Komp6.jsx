// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
    let temperaturos = [15, 20, 25, 30, 35, 40];

    return (
        // TODO: atvaizduokite visas temperatūras
        // naudodami map funkciją, įdėdami viską
        // į lentelę (table),
        // kurioje būtų du stulpeliai:
        // 1. eilutės numeris (1, 2, 3, ...)
        // 2. temperatūra iš masyvo

        <div>
            <h3>Komp6</h3>

            <table>
                <tbody>
                    {temperaturos.map((temp, i) => (
                        <tr key={i}>
                            <td>{i} - </td>
                            <td>{temp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )
}

export default Komp6
