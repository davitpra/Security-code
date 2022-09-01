import React from "react";
// segun la convension el security code tiene que ir en mayusculas y separado por un guion bajo
const SECURITY_CODE = "paradigma"

function UseState ({name}) {
    const [state,setState] = React.useState ({
        value: "",
        error: false,
        loading: false,
        deleted: false, 
        confirmed: false,
    })
    
    const {value, error, loading, deleted, confirmed} = state
    
    const onConfirm = () => {
    setState({
        ...state,
        error: false,   
        confirmed: true,
        loading: false
    })}

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue
        })
    }
    
    const onCheck = () => {
        setState({
            ...state,
            loading: true
        })
    }
    
    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        })
    }
    
    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: ''
        })
    }
    
    
    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        })
    }

    // console.log (value)
    
    React.useEffect(() => {
        // console.log("Starting the effect");
    
        if(!!loading) {
            setTimeout(() => {
                // console.log("Doing the validation");
                if (value === SECURITY_CODE){
                    onConfirm ()
                }else {
                    onError ()
                }
                // console.log("Finishing the validation");
            }, 1000)
        }
        // console.log("Finishing the effect");
    }, [loading]);

    if (!deleted && !confirmed){
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
                    onWrite(event.target.value)
                }}
            />
            <button
                onClick={onCheck}
            >
                Comprobar
            </button>
        </div>
    )
    } else if (!deleted && confirmed ){
        return (
            <>
            <p> Pedimos confirmacion. Estas seguro?</p>
            <button
                onClick={onDelete}
            >
                Si, eliminar
            </button>
            <button
                onClick={onReset}
            >
                No, me arrepenti 
            </button>
            </>
        )
    } else {
        return (
            <>
            <p> Eliminado con exito</p>
            <button
                onClick={onReset}
            >
                Resetear, volver atras 
            </button>
            </>
        )
    }
}

export {UseState}