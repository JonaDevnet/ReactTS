import React from "react";

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
    }
    render(): React.ReactNode {
        return <>
        Hola componente de clase y su vida util de: {this.state.name}
        </>
    }
}
