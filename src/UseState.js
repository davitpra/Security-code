import React from "react";
// segun la convension el security code tiene que ir en mayusculas y separado por un guion bajo
const SECURITY_CODE = "paradigma"

function UseState ({name}) {
    const [state,setState] = React.useState ({
        value: "",
        error: false,
        loading: false,
    })

    const {value, error, loading } = state

    // console.log (value)
    
    React.useEffect(() => {
        console.log("Starting the effect");
    
        if(!!loading) {
            setTimeout(() => {
                console.log("Doing the validation");
                if (value === SECURITY_CODE){
                    setState (
                        {...state,
                        loading: false,
                        error: false}
                    )
                }else {
                    setState (
                        {...state,
                        error: true,
                        loading: false,})
                }
                console.log("Finishing the validation");
            }, 1000)
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
                    setState (
                        {...state,
                        value: event.target.value,})
                }}
            />
            <button
                onClick={() =>{ 
                    // setError (false) // este fue
                    setState (
                        {...state,
                        loading: true,})}}
            >
                Comprobar
            </button>
        </div>
    )
}

export {UseState}