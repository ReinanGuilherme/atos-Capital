import styled from "styled-components";

//interface criada para receber um valor de 1 a 3 para que os elementos consigam entender qual transição deverá fazer.
interface propsSlideProximo {
    exibirType01: number
    exibirType02: number
}

export const Container = styled.div<propsSlideProximo>`

    //alinhando as ancoras bsCircle
    .bsCircle {        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        margin-bottom: 123px;

        svg {

            background-color: #ABAEB1;
            border-radius:50%;
            transition: all 0.7s;                                     

            @media (min-width: 1021px) {

                //mudando a cor da ancora em destaque de acordo com a props.exibirType01
                &:nth-child(${props => props.exibirType01 }) {                
                    background-color: #343638; 
                }

                //ocultando ancoras desnecessarias quando estiver com um width maior
                &:nth-child(4), &:nth-child(5), &:nth-child(6) {
                    display: none;
                }
            }

            @media (max-width: 1020px) {
                
                //mudando a cor da ancora em destaque de acordo com a props.exibirType02
                &:nth-child(${props => props.exibirType02 }) {                
                    background-color: #343638; 
                }
            }
        }
    }

`

export const ContainerCardProximo = styled.div`

    padding: 135px 25px 135px 25px;
    display: grid;
    grid-template-columns: 30px minmax(300px, 1100px) 30px;
    align-items: center;
    justify-content: center;
    gap: 70px;

    .carouselCards {

        overflow: auto;
        scroll-behavior: smooth;
        min-height: 550px;
        padding-left: 20px;
        
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 80px;

        &::-webkit-scrollbar {
            display: none;
        }

    }       

    @media (max-width: 1460px) {

        grid-template-columns: 30px minmax(300px, 954px) 30px;
    }

    @media (max-width: 1260px) {

        grid-template-columns: 30px minmax(300px, 804px) 30px;
        gap: 25px;
    }

    @media (max-width: 1020px) {
        
        grid-template-columns: 30px 523px 30px;
        
    }

    @media (max-width: 710px) {
        
        grid-template-columns: 30px 274px 30px;
        
    }

    @media (max-width: 380px) {

        grid-template-columns: 20px 274px 20px;
        gap: 10px;

        svg {
            width: 20px;
        }
    }
`