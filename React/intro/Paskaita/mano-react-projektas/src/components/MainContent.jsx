import React from "react";

function MainContent() {
    const sveikinimas = "Sveiki atvykę į mano svetainę!";
    const papildomaInfo = "Ši svetainė skirta mokytis React!";
    return (
        <main className="main-content">
            <p>{sveikinimas}</p>
            <p>{papildomaInfo}</p>
        </main>
    );
}
export default MainContent;
