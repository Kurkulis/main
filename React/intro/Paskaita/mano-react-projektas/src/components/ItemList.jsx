import React from 'react';

function ItemList() {
    const items = []; // Pabandykite pakeisti į ne tuščią masyvą ir stebėkite skirtumą.
    return (
        <div>
            {items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Nėra duomenų</p>
            )}
        </div>
    );
}
export default ItemList;