import styled from "styled-components";

//container principal do buttonType03
export const Container = styled.button`

    height: 26px;
    width: 78px;
    font-family: FonteAtosBold;
    font-size: 8pt;

    color: var(--whiteText);
    background: var(--redType02);
    border-radius: 5px;
    text-align: center;

    transition: all 0.3s;

    //estilizando button atraves do hover
    &:hover {
        
        background: white;
        color: var(--redType02);
        border: 2px solid var(--redType02);
    }

`