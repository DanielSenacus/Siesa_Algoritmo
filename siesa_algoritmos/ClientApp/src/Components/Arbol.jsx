import React from "react";

const Arbol = () => {
    return (
        <ul>
            <li>{arbol.peso}</li>
            {arbol.subarboles.map((subarbol) => (
                <Arbol arbol={subarbol} />
            ))}
        </ul>
    );
};

export default Arbol;
