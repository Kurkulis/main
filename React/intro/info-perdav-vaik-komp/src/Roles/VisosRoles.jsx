import Role from "./Role";

const VisosRoles = () => {

    return (
        <div>
            <Role pavadinimas="Admin" kiekis={35} />
            <Role pavadinimas="Moderatorius" kiekis={12} />
            <Role pavadinimas="Svečias" kiekis={5} />
        </div>
    );
};

export default VisosRoles;