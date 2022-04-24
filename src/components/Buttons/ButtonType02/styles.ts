import styled from "styled-components";

//container principal do buttonType03
export const Container = styled.button`

    height: 40px;
    width: 119px;
    
    color: var(--whiteText);
    font-size: 9px;
    font-family: FonteAtosBold;

    background: var(--redType01);
    border-radius: 5px;

    transition: all 0.3s;
    
    //estilizando button atraves do hover
    &:hover {
        
        background: white;
        color: var(--redType02);
        border: 2px solid var(--redType02);
    }
`