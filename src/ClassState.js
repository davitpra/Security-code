import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma"
class ClassState extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
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
    
                if (this.state.value === SECURITY_CODE){
                    this.setState({
                        error:false,
                        loading:false});
                }else {
                    this.setState({
                        error:true,
                        loading:false});
                }        
                console.log("Finishing the validation");
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2> Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                {(this.state.error && !this.state.loading) && (
                    <p>El código es es incorrecto</p>
                )}
                {this.state.loading && (
                <Loading />
                )}
                <input
                    value = {this.state.value}
                    onChange = {(event)=>(
                        this.setState ({value : event.target.value})
                    )}
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