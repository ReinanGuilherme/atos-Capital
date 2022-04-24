import styled from "styled-components";

//import da imagem de fundo do footer
import backgroundFooter from '../../assets/lotes/backgroundFooter.jpg'

export const Container = styled.footer`

    font-size: 16pt;
    font-family: FonteAtosMedium;
    color: var(--whiteText);
    background: var(--redType04);

    img {
        max-height: 65px;

        & + img {
            margin-left: 20px;
        }
    }

    a {        
        color: var(--whiteText);
    }
`

//container das imagens e endereços
export const ContainerDiv1 = styled.div`
    min-height: 423px;
    padding: 20px;

    background: url(${backgroundFooter});
    background-position: bottom;
    background-repeat: no-repeat;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "img1 address1"
                        "img2 address2";
    //responsividade
    @media (max-width: 890px) {   
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 2fr 2fr;     
        grid-template-areas: "img1"
                            "img2"
                            "address1"
                            "address2";
    }

    //definindo o ajuste das grids
    section {

        line-height: 1.25;

        &:nth-child(1) {
            grid-area: img1;
        }

        &:nth-child(2) {
            grid-area: img2;
        }

        // centralizando o conteudo das duas primeiras sections
        &:nth-child(1), &:nth-child(2) {            
            display: flex;
            align-items: center;
            justify-content: center;
        
            @media (max-width: 380px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        &:nth-child(3) {
            grid-area: address1;
        }

        &:nth-child(4) {
            grid-area: address2;
        }

        // alinhando os conteudos das duas ultimas sections
        &:nth-child(3), &:nth-child(4) {
            display: flex;
            align-items: center;

            @media (max-width: 380px) {

                .emailAtos {
                    font-size: 14pt;
                }
            }
        }
    }
`

//container address
export const ContainerDiv2 = styled.div`

    min-height: 75px;
    padding: 20px;
    background: var(--redType03);
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "redeSocial politica";

    svg {
        height: 22px;
        width: 22px;
    }

    svg path {
        fill: white;

        
    }

    //responsividade
    @media (max-width: 890px) {  
        
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;     
        grid-template-areas: "redeSocial"
                            "politica";
    }

    section {


        &:nth-child(1) {
            grid-area: redeSocial;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        &:nth-child(2) {
            display: flex;
            align-items: center;
            padding-top: 10px;

            gap: 100px;

            //responsividade
            @media (max-width: 890px) {
                gap: 20px;
                text-align: center;
            }

        }
    }
`