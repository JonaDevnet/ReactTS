import React from "react";

interface CompClaseProps {
    name: string;
}

export class ComponenteClass extends React.Component<CompClaseProps, any> {
    constructor(props: CompClaseProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <>
        Hola componente desde una clase de: {this.props.name}
        </>
    }
}