//componente estilizado
import { Container, Error, TextAreaError } from "./styles";

//hook que determina o que o formulario irá receber
import { useField } from '@unform/core'
import { useEffect, useRef } from "react";

//icon alert SVG
import { FiAlertCircle } from 'react-icons/fi'
import { Tooltip } from "../FaleConoscoToolTip";

interface propsTextArea {
    name: string
    labelText: string
}

export function FaleConoscoTextArea({name, labelText}: propsTextArea) {

    //criando referencia para o textArea
    const textAreaRef = useRef(null)
    
    //recebe o nome do textArea e atraves disso recebe varias propriedades
    const {fieldName, error, registerField} = useField(name)

    //realizando o registro do textArea assim que o componente for exibido em tela.
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textAreaRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    //retornando um label e um textArea para o form personalizado
    return (
        <Container>
            {/* Label - onde irá exibir um texto para referencia o usuario o que deve ser colocado no textarea */}
            <label htmlFor={name}>
                {labelText}
                {/* exibindo mensagem de erro, caso o textarea não esteja preenchido corretamente ou sem preencher */}
                {error && 
                <Error>
                    <Tooltip title={error}>
                        <FiAlertCircle color="#7e1416"/>
                    </Tooltip>
                </Error>}
            </label>
            <TextAreaError isErrored={!!error} ref={textAreaRef} id={name}/>
        </Container>   
    )
}