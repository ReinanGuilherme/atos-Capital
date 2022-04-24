import styled, {css} from "styled-components"

interface propsInputErrors {
    isErrored: boolean
}

export const Container = styled.span`

    input {
        font-size: 16px;
    }

`

export const InputError = styled.input<propsInputErrors>`

border: 1px solid var(--blueType01);

//exibindo uma borda caso exista alguma mensagem de erro para ser exibida
${(props) => props.isErrored && css`
    border: 2px solid var(--redType01) ;
`}

`

//estilizando um Tooltip
export const Error = styled.span`
    margin-left: 10px;
    position: relative;

    svg {
        cursor: pointer;
        height: 14px;
    }
    
    span {
        
        //acessando o tooltip
        span {
            background: var(--redType01);
            color: var(--whiteText);
            padding: 8px;
            border-radius: 4px;
            font-family: 14px;
            opacity: 0;
            visibility: hidden;

            transition: opacity 0.4s;

            position: absolute;
            bottom: calc(100% + 10px);
            width: 150px;
            left: 50%;
            transform: translateX(-50%);

            &::before {
                content: "";
                border-style: solid;
                border-color: var(--redType01) transparent;
                border-width: 6px 6px 0 6px;
                top: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        //exibindo mensagem do tooltip atraves do hover
        &:hover span {
            opacity: 1;
            visibility: visible;
        }
    }
`