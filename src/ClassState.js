import React from "react";
import { Loading } from "./Loading";
class ClassState extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error:false,
            loading: false,
        }
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount");
    }
    
    componentDidMount() {
        console.log("componentDidMount");
    }
    
    componentDidUpdate() {
        console.log("Update");
    
        if(!!this.state.loading) {
            setTimeout(() => {
                console.log("Doing the validation");
    
                this.setState( { loading: false } );
    
                console.log("Finishing the validation");
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2> Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                {this.state.error && (
                    <p>El código es es incorrecto</p>
                )}
                {this.state.loading && (
                <Loading />
                )}
                <input
                    type='text' 
                    placeholder="codigo de seguridad"/>
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState}