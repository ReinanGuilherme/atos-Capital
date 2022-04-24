//metodos react utilizados
import { useRef, useState } from "react";

//import dos componentes personalizados
import { Container, ContainerCardProximo } from "./styles";

//import dos icones SVGs utilizados
import { BsCircle } from "react-icons/bs";
import { IconSetaDireitaSVG } from "../IconSVG/IconSetaDireita";
import { IconSetaEsquerdaSVG } from "../IconSVG/IconSetaEsquerda";

//recebendo elementos jsx
interface propsCarouselProximo {
    children: JSX.Element[] | JSX.Element
}


//carrosel responsavel por passar e voltar os cards
export function CarouselProximo({children}: propsCarouselProximo) {

    //variaveis responsaveis por armazenar o estado das ancoras
    //Type01 - quando for exibido 2 cards ao mesmo tempo
    //Type02 - quando for exibido 1 card por vez
    const [exibirType01, setExibirType01] = useState(1)
    const [exibirType02, setExibirType02] = useState(1)

    //armazenando a referencia da div ondé se encontra os cards
    let carousel = useRef<any>(null)

    //função responsavel por voltar carousel
    function handleAnterior() {
        //verifica na DOM o width que o container se encontra e diminuir proporcionalmente para que o card volte a sessão, utilizado + 56 pois é a referencia do espaçamente de um card para outro
        carousel.current.scrollLeft -= carousel.current.offsetWidth+56
        if(exibirType01 > 1) {            
            setExibirType01(exibirType01 - 1)
        }

        if(exibirType02 > 1) {
            setExibirType02(exibirType02 - 1)
        }
    }

    //função responsavel por passar carousel
    function handleProximo() {
        //verifica na DOM o width que o container se encontra e acrescenta proporcionalmente para que o card volte a sessão, utilizado + 56 pois é a referencia do espaçamente de um card para outro
        carousel.current.scrollLeft += carousel.current.offsetWidth+56
        if(exibirType01 < 3) {
            setExibirType01(exibirType01 + 1)
        }

        if(exibirType02 < 6) {
            setExibirType02(exibirType02 + 1)
        }
    }

    return (
        <Container exibirType01={exibirType01} exibirType02={exibirType02}>            
            <ContainerCardProximo>

                {/* Botão responsavel por voltar o card */}
                <button onClick={() =>handleAnterior()}><IconSetaEsquerdaSVG/></button>

                    {/* Div onde os cards estão alocados */}
                    {/* Recebe os cards atraves da propriedade children */}
                    <div ref={carousel} className="carouselCards">
                        {children}
                    </div>

                {/* Botão responsavel por passar o card */}
                <button onClick={() =>handleProximo()}><IconSetaDireitaSVG/></button>               
            </ContainerCardProximo> 
            
            {/* Ancoras de exibição, toda vez que o slide rolar automaticamente, essas ancoras indicarão em qual sessão do slide o slide está */}
            <div className="bsCircle">
                <BsCircle/>
                <BsCircle/>
                <BsCircle/>
                <BsCircle/>
                <BsCircle/>
                <BsCircle/>
            </div>
        </Container>
    )
}