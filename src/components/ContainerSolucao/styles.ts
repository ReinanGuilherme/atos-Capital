import styled from "styled-components"

//container principal das soluções
export const Container = styled.div`

    height: 239px;
    width: 265px;
    background: #fff;
    box-shadow: -10px 15px 25px rgba(0,0,0,0.3);

    display: grid;
    grid-template-rows: 179px 60px;

    //alinhando os elementos dentro do container de soluções
    div {
        width: 265px;
        display: flex;
        align-items: center;
        justify-content: center;

        //ajustando a div dos botões
        &:nth-child(2) {
            align-items: flex-start;
        }
    }

`

//div criada para o button que executa o modal, sem estilização
export const ContainerButton = styled.div`
    
`

//estilização do modal para ser exibido quando o usuario clicar no (ver mais)
export const ContainerModal = styled.div`

    //organizando a div onde ficará os logos de cada solução
    div {
        background: #fff;
        height: 200px;
        padding: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        svg {
            color: var(--redType01);
            font-size: 20pt;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 1;
        }
    }    

    p {
        padding: 25px;
        font-size: 15pt;
        line-height: 1.5;
    }

    //ajustando paragrafo
    @media (max-width: 380px) {
        p {
            font-size: 12pt;
        }
    }

`