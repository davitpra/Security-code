import React from "react";
// segun la convension el security code tiene que ir en mayusculas y separado por un guion bajo
const SECURITY_CODE = "paradigma"

function UseState ({name}) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log (value)
    
    React.useEffect(() => {
        console.log("Starting the effect");
    
        if(!!loading) {
            setTimeout(() => {
                console.log("Doing the validation");
        if (value !== SECURITY_CODE){
            setError (true)
        }
        setLoading (false)
        
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
            <input 
                placeholder="codigo de seguridad"
                value= {value}
                onChange = {(event) => {
                    setValue (event.target.value)
                }}
            />
            <button
                onClick={() => setLoading(true)}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState}