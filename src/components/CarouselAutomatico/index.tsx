//metodos react utilizados
import { useEffect, useState } from "react";

//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { Container, ContainerSlidePrincipal, ContainerSliderSecundario, ContainerSlides, SlidePrincipal, SlideSecundario } from "./styles";
import { ButtonType01 } from "../Buttons/ButtonType01";
import { ButtonType04 } from "../Buttons/ButtonType04";

//import das imagens utilizadas para o slide automatico
import slide1 from '../../assets/lotes/slide1Blog.jpg'
import slide2 from '../../assets/lotes/slide2Blog.jpg'
import slide3 from '../../assets/lotes/slide3Blog.jpg'

//import do svg que será utilizado como identificador dos slides
import { BsCircle} from "react-icons/bs"

//retorna um carousel automatico
export function CarouselAutomatico() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    //responsavel por exibir o estado do conteudo principal do slide
    const [exibir, setExibir] = useState(1)

    //metodo que verifica toda alteração sofrida no estado da variavel exibir, toda vez que existir alguma mudança na variavel exibir ele executa uma função temporizadora que é ativada com 5 segundos
    useEffect(() => {
        const ativarSlide = setTimeout(slideAutomatico, 5000)
    }, [exibir])

    //incrementa +1 para cada vez que a função for chamada, sendo assim alterando o index que será utilizado
    function slideAutomatico() {
        //se for menor que 3 continua incrementando se for diferente ele irá reiniciar toda operação
        if(exibir < 3) {
            setExibir(exibir + 1)
        } else {
            //reinicia todo o slide quando chegar no limite de slides disponiveis para serem exibidos, no caso o limite são 3
            setExibir(1)
        }
    }

    //objetos que armazenam um conjuto de elementos dinamicamente para que possam ser usados em mais de um lugar
    let slideType01 = {
        img: slide1,
        titulo: t("Slide1H3"),
        texto: t("Slide1P")
    }

    let slideType02 = {
        img: slide2,
        titulo: t("Slide2H3"),
        texto: t("Slide2P")
    }

    let slideType03 = {
        img: slide3,
        titulo: t("Slide3H3"),
        texto: t("Slide3P")
    }

    return (
        <Container>

            {/* ContainerSlides recebe uma propriedade que será utilizada como referencia para os estilos, identificando qual slide irá ser exibido dinamicamente */}
            <ContainerSlides exibir={exibir}>

                {/* Todos containers foram montado para seguir uma ordem logica para que não se repitam conforme o slide mude automaticamente */}
                {/* Slide principal passa para o topo do slide secundario */}
                {/* Slide secundario top passa para o baixo no slide secundario */}
                {/* Slide secundario bottom passa para o slide principal */}

                {/* exibindo o slide principal do blog */}
                <ContainerSlidePrincipal exibir={exibir}>
                    <SlidePrincipal key={slideType01.img}>
                        <img src={slideType01.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <section>
                            <h3 className="textos">{slideType01.titulo}</h3>
                            <p className="textos">{slideType01.texto}</p>
                        </section>

                        <ButtonType01/>
                    </SlidePrincipal>

                    <SlidePrincipal key={slideType03.img}>
                        <img src={slideType03.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <section>
                            <h3 className="textos">{slideType03.titulo}</h3>
                            <p className="textos">{slideType03.texto}</p>
                        </section>

                        <ButtonType01/>
                    </SlidePrincipal>
                                
                    <SlidePrincipal key={slideType02.img}>
                        <img src={slideType02.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <section>
                            <h3 className="textos">{slideType02.titulo}</h3>
                            <p className="textos">{slideType02.texto}</p>
                        </section>

                        <ButtonType01/>
                    </SlidePrincipal>
                                
                </ContainerSlidePrincipal>

                {/* exibindo o slide secundario top do blog */}
                <ContainerSliderSecundario exibir={exibir}>

                    <SlideSecundario key={slideType02.img}>
                        <img src={slideType02.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <h3 className="textos">{slideType02.titulo}</h3>
                        <p className="textos">{slideType02.texto}</p>

                        <ButtonType04/>
                    </SlideSecundario>
                    
                    <SlideSecundario key={slideType01.img}>
                        <img src={slideType01.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <section className="ajustarImgContainer">
                            <h3 className="textos">{slideType01.titulo}</h3>
                            <p className="textos">{slideType01.texto}</p>

                            <ButtonType04/>
                        </section>

                    </SlideSecundario> 
                               
                    <SlideSecundario key={slideType03.img}>
                        <img src={slideType03.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <h3 className="textos">{slideType03.titulo}</h3>
                        <p className="textos">{slideType03.texto}</p>

                        <ButtonType04/>
                    </SlideSecundario>
                                
                </ContainerSliderSecundario>                
                
                {/* exibindo o slide secundario bottom do blog */}
                <ContainerSliderSecundario exibir={exibir}>

                    <SlideSecundario key={slideType03.img}>
                        <img src={slideType03.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <h3 className="textos">{slideType03.titulo}</h3>
                        <p className="textos">{slideType03.texto}</p>

                        <ButtonType04/>
                    </SlideSecundario>

                    <SlideSecundario key={slideType02.img}>
                        <img src={slideType02.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <h3 className="textos">{slideType02.titulo}</h3>
                        <p className="textos">{slideType02.texto}</p>

                        <ButtonType04/>
                    </SlideSecundario>
                    
                    <SlideSecundario key={slideType01.img}>
                        <img src={slideType01.img} alt="Imagem do eventos do Ecossistema Sap Business" />
                                    
                        <section className="ajustarImgContainer">
                            <h3 className="textos">{slideType01.titulo}</h3>
                            <p className="textos">{slideType01.texto}</p>

                            <ButtonType04/>
                        </section>

                    </SlideSecundario>                                
                                
                </ContainerSliderSecundario>

                {/* Ancoras de exibição, toda vez que o slide rolar automaticamente, essas ancoras indicarão em qual sessão do slide o slide está */}
                <div className="ancoraShowSlide">
                    <BsCircle/>
                    <BsCircle/>
                    <BsCircle/>
                </div>
                
            </ContainerSlides>

        </Container>
    )
}