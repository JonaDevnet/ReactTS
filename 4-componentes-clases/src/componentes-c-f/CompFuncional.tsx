import React from "react";

interface CompFuncionalProps {
    name: string
}
export const ComponenteFuncional: React.FC<CompFuncionalProps> = ({name}) => {
    return(
        <>
        Hola componente funcional de  {name}
        </>