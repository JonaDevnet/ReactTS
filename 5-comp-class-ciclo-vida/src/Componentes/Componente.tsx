import { log } from "console";
import React from "react";

// solo de lectura Props
interface CompProps {
    name: string;
}

interface CompState {
    name: string;
}

export class Componentes extends React.Component<CompProps, CompState> {
    constructor(props: CompProps){
        super(props)
        this.state = {
            name: this.props.name
        }
        console.log('Constructor');
    }

    render(): React.ReactNode {
        console.log('Render');
        return <>
        Hola componente de clase y su vida util de: {this.state.name} <br />
        <button onClick={() => {
            this.setState({name: 'Mia kalifa'});
        }}>
            Cambiar Nombre
        </button>
        </>
    }

    componentDidMount(): void {
        console.log("ComponenteDdMount");
    }

    componentDidUpdate(prevProps: Readonly<CompProps>, prevState: Readonly<CompState>, snapshot?: any): void {
        console.log("ComponenDidUpdate");
        console.log("prevProps:");
        console.log(JSON.stringify(prevProps));
        console.log("currente props");
        console.log(JSON.stringify(this.props));
        console.log("prevState:");
        console.log(JSON.stringify(prevState));  
        console.log("current state");
        console.log(JSON.stringify(this.state));
        
    }

    componentWillUnmount(): void {
        console.log("ComponentWillUnmount");
    }
}
