import { useState } from "react";

function Botao({ children }) {
    const [curtida, setCurtida] = useState(false);

    return (
        <button onClick={() => setCurtida(true)}>
            {children}
        </button>
    )
}

export default Botao;