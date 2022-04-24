import styled from 'styled-components'

//interface criada para receber um valor de 1 a 3 para que os elementos consigam entender qual transição deverá fazer.
interface propsSlideAutomatico {
    exibir: number
}

export const Container = styled.div`
    height: 100%;
`

//recebe interface props para utilizar no bsCircle onde será exibida uma em cada bsCircle de acordo com o slide exibido
export const ContainerSlides = styled.div<propsSlideAutomatico>`

    //dimensionando o espaçamento de cada campo que irá ter um slide
    display: grid;
    justify-content: center;
    column-gap: 17px;
    grid-template-columns: minmax(330px, 770px) minmax(330px, 360px);
    grid-template-rows: minmax(100px, 321px) minmax(150px, 321px);
    grid-template-areas:"slidePrincipal slideSecundario1"
                        "slidePrincipal slideSecundario2"
                        "bsCircle bsCircle";

    div:nth-child(1) {
        grid-area: slidePrincipal;
    }

    div:nth-child(2) {
        grid-area: slideSecundario1;
    }

    div:nth-child(3) {
        grid-area: slideSecundario2;
    }

    div:nth-child(4) {
        grid-area: bsCircle;
    }

    //css responsavel por exibir a ancora do slide, identificando qual das 3 exibições o slide está
    .ancoraShowSlide {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 90px;

        svg {

            background-color: #ABAEB1;
            border-radius:50%;
            transition: all 0.7s;

            //utilizando a propriedade exibir para identificar dinamicamente qual dos childrens está sendo exibido para que realize a marcação na ancora svg
            &:nth-child(${props => props.exibir}) {
                background-color: #343638;  
            }
        }

        @media (max-width: 1220px) {            
            margin-top: 50px;            
        }

    }

    @media (max-width: 1220px) {

        grid-template-columns: minmax(330px, 800px);
        grid-template-rows: minmax(100px, 750px) minmax(50px, 70px);
        grid-template-areas:"slidePrincipal"
                            "bsCircle";                            
    }


`

//responsavel por exibir o slide principal do blog
export const ContainerSlidePrincipal = styled.div<propsSlideAutomatico>`

    height: 642px;
    max-width: 770px;
    grid-area: slidePrincipal;
    overflow: hidden;
    position: relative;
    color: var(--whiteText);
    border-radius: 15px;

    //verificando atraves da props recebida, qual o slide que deverá realizar a transição
    div:nth-child(${props => props.exibir}) {
        transform: translateX(100%);
    }

    @media (max-width: 1220px) {
        height: 800px;
    }
`

export const SlidePrincipal = styled.div`


    //alinahndo e escondendo os elementos do slide para que faça a rolagem do slide
    position: absolute;
    overflow: hidden;
    min-height: 642px;
    width: 100%;
    left: -100%;
    border-radius: 15px;

    display: grid;
    column-gap: 17px;
    grid-template-rows: minmax(150px, 350px) minmax(30px, 80px) minmax(80px, 151px)  minmax(31px, 50px);
    
    transition: all 1s;

    img {      
        width: 100%;
    }

    h3 {
        width: 70%;
    }

    h3, p {
        padding: 5px 25px;
    }

    button {
        position: absolute;
        right: 54px;
        bottom: 20px;
    }

    &:nth-child(1){
        
        p {
            font-size: 17pt;
        }
    }

    &:nth-child(2) {
        background: #4D0303;

        //ajustando imagens para nãoo exibir as bordas radios
        img {
            width: 105%;
        }
    }

    &:nth-child(3) {
        background: #00583E;

        //ajustando imagens para nãoo exibir as bordas radios
        img {
            width: 105%;
        }
    }

    @media (max-width: 1220px) {

        grid-template-rows: 350px 350px 70px;
        background: black;  
        border-radius: 0 0 15px 15px ;

        section {
            
            overflow: hidden;
        }

        &:nth-child(1) {

            section {
                background: black;  
                border-radius: 0 0 15px 15px ;
            }
        }
    }
    
    @media (max-width: 800px) {

        grid-template-rows: 312px 350px 70px;

        h3 {
            font-size: 19pt;
        }

        p {
            font-size: 16pt;
        }
    }

    @media (max-width: 550px) {

        grid-template-rows: 225px 325px 70px;
    }
`

//responsavel por exibir os slides secundarios do blog
export const ContainerSliderSecundario = styled.div<propsSlideAutomatico>`

    position: relative;
    overflow: hidden;

    
    //verificando atraves da props recebida, qual o slide que deverá realizar a transição
    div:nth-child(${props => props.exibir}) {
        transform: translateX(-100%);
    }

    //deixando de exibir a tela secundaria em um certo ponto do width
    @media (max-width: 1220px) {
        display: none;
    }
`

export const SlideSecundario = styled.div`

    position: absolute;
    height: 100%;
    width: 100%;
    right: -100%;
    transition: all 1s;
    border-radius: 15px;
    
    img {
        width: 100%;
    }

    h3 {
        padding: 12px 5px 15px 5px;
        font-size: 12pt;
    }

    p {
        font-size: 8pt;
    }

    button {
        position: absolute;
        right: 0px;
        bottom: 16px;
    }

    .ajustarImgContainer {
        height: 174px;
        position: absolute;
        top: 147px;
        background-color: #fff;
    }   
`