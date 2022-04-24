import styled from "styled-components";

// componente div personalizado para o (menu)
export const Container = styled.div`
    height: 75px;
    padding: 0 79px 0 345px;

    font-size: 10pt;
    font-family: FonteAtosBold;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--grayType03);

    //responsividade dos elementos
    @media (max-width: 1800px) {

        padding: 0 50px 0 100px;

    }

    @media (max-width: 1570px) {

        padding: 0 50px 0 50px;
    }

    @media (max-width: 1340px) {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr;
        grid-template-areas: "logo menu tradutor";
    }

    @media (max-width: 415px) {
        padding: 0 10px 0 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        grid-template-areas: "logo menu tradutor";
    }

`

export const ContainerLogo = styled.div`
    height: 100%;

    display: flex;
    align-items: center;    
    margin-right: 87px;
    
    img {
        height: 37px;
    }

    .logoAtosCapital {
        width: 174px;
    }

    .logoSapPartner {
        width: 53px;
        margin: 0 23px 0 24px;
    }

    .logoSapBusiness {
        width: 154px;
    }

    //responsividade dos elementos
    @media (max-width: 1570px) {

        margin-right: 27px;
    }

    @media (max-width: 1340px) {

        width: 120px;

        grid-area: logo;

        margin-right: 0;
    }

    //responsividade dos elementos
    @media (max-width: 900px) {

        img {
            height: 25px;
        }

        .logoSapPartner, .logoSapBusiness {
            display: none;
        }
    }
`

export const ContainerNavegacaoPagina = styled.nav`

    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--whiteText);

    .menu {
        display: inline-block;

        .dropDown {
            display: block;
        }

        //deixando o item menu invisivel para quando não existir a necessidade do menu drop down
        .dropDown span {
            display: none;
        }

            //alinhando a lista do menu
            .listaMenu, .listaMenu li {
                display: inline-block;
            }

            .listaMenu li:nth-child(1) {
                width: 126px;
                margin-right: 17px;
            }
            
            .listaMenu li:nth-child(2) {
                width: 98px;
                margin-right: 17px;
            }

            .listaMenu li:nth-child(3) {
                width: 104px;
                margin-right: 17px;
            }

            .listaMenu li:nth-child(4) {
                width: 86px;
                margin-right: 17px;
            }

            .listaMenu li:nth-child(5) {
                width: 50px;
                margin-right: 17px;
            }

            .listaMenu li:nth-child(6) {
                width: 88px;
                margin-right: 109px;
            }

            a {
                color: var(--whiteText);
                transition: all 0.5s;

                &:hover {
                    color: var(--redType01);
                }
            }            
    }

    //responsividade dos elementos
    @media (max-width: 1570px) {

        .menu {

            .listaMenu li:nth-child(6) {
                margin-right: 15px;
            }
        }
    }

    //exibindo um drop down
    @media (max-width: 1340px) {       

        .menu {

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: right;

            .dropDown {

                grid-area: menu;

                //exibindo o menu
                span {
                    height: 71px;
                    width: 150px;
                    text-align: center;
                    padding-top: 25px;

                    display: block;

                    cursor: pointer;
                }

                //sumindo o menu para que ele apareça apenas no dropDown
                .listaMenu {
                    display: none;
                    position: absolute;

                    //removendo efeito hover do color
                    a {

                        &:hover {
                            color: var(--whiteText);
                        }

                    }  
                }

                //listando as opções do menu quando o mouse passar por cima
                &:hover {

                    .listaMenu {
                        display: block;
                        position: absolute;
                        z-index: 1;

                        li {
                            width: 150px;
                            padding: 10px;
                            display: block;
                            background-color: var(--redType01);
                        }
                    }
                }
            }            
        }
    }

    @media (max-width: 415px) {

        .menu {
            .dropDown {

                span {
                    width: 75px;
                }
            }
        }
    }
`

export const ContainerTranslation = styled.div`

    @media (max-width: 1340px) {
        grid-area: tradutor;

        display: flex;
        justify-content: center;
    }
`