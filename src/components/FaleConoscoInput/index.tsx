//componente estilizado
import { Container, Error, InputError } from "./styles";

//hook que determina o que o formulario irá receber
import { useField } from '@unform/core'
import { useEffect, useRef } from "react";

//icon alert SVG
import { FiAlertCircle } from 'react-icons/fi'
import { Tooltip } from "../FaleConoscoToolTip";

interface propsInput {
    name: string
    labelText: string
}

export function FaleConoscoInput({name, labelText}: propsInput) {

    //criando referencia para o input
    const inputRef = useRef(null)
    
    //recebe o nome do input e atraves disso recebe varias propriedades
    const {fieldName, error, registerField} = useField(name)

    //realizando o registro do input assim que o componente for exibido em tela.
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    //retornando um label e um input para o form personalizado
    return (
        <Container>
            
            {/* Label - onde irá exibir um texto para referencia o usuario o que deve ser colocado no input */}
            <label htmlFor={name}>
                {labelText}
                {/* exibindo mensagem de erro, caso o input não esteja preenchido corretamente ou sem preencher */}
                {error && 
                <Error>
                    <Tooltip title={error}>
                        <FiAlertCircle color="#7e1416"/>
                    </Tooltip>
                </Error>}
            </label>

            {/* Input e seus respectivos atributos */}
            <InputError isErrored={!!error} ref={inputRef} id={name}/>
        </Container>   
    )
}