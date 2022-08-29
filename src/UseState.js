import React from "react";

function UseState ({name}) {
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    
    React.useEffect(() => {
        console.log("Starting the effect");
    
        if(!!loading) {
            setTimeout(() => {
                console.log("Doing the validation");
    
                setLoading(false);
    
            console.log("Finishing the validation");
            }, 3000);
        }
    
        console.log("Finishing the effect");
    }, [loading]);

    return (
        <div>
            <h2> Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            { error && (
                <p>El código es es incorrecto</p>)}
            {loading && (
                <p>Loading...</p>)}
            <input placeholder="codigo de seguridad"/>
            <button
                onClick={() => setLoading(true)}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState}