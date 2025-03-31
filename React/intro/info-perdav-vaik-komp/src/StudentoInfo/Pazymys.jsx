
const Pazymys = ({ pazymys }) => {

    const tipas = pazymys >= 5 ? "teigiamas" : "neigiamas";

    return (
        <p>
            Pažymys: {pazymys} – {tipas}
        </p>
    );
};

export default Pazymys;