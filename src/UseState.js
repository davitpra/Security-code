import React from "react";

function UseState ({name}) {
    const [error, setError] = React.useState(true);
    return (
        <div>
            <h2> Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            { error && (
                <p>El código es es incorrecto</p>)}
            <input placeholder="codigo de seguridad"/>
            <button
                onClick={()=>setError(!error)}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState}