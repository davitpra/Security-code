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
            //aqui se pone el error en negativo. 
            setError (false)
            setTimeout(() => {
                console.log("Doing the validation");
                if (value === SECURITY_CODE){
                    setLoading(false);
                }else {
                    setError (true)
                    setLoading (false)
                }
                console.log("Finishing the validation");
            }, 3000);
        }
    
        console.log("Finishing the effect");
    }, [loading]);

    return (
        <div>
            <h2> Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            {/* aqui validamos si esta en loading para que no aparezca el error.  */}
            { (error&& !loading) && (
                <p>El código es es incorrecto</p>)}
            {loading && (
                <p>Loading...</p>)}
            <input 
                placeholder="codigo de seguridad"
                value= {value}
                onChange = {(event) => {
                    // setError (false) // este no es muy correcto                    
                    setValue (event.target.value)
                }}
            />
            <button
                onClick={() =>{ 
                    // setError (false) // este fue
                    setLoading(true)}}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState}