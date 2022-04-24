//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { Card, Container, ContainerCards, ContainerLogoParceiros, ContainerSlideCardParceiro } from "./styles";
import { CardImgEVideo } from "../CardImgEVideo";
import { CarouselProximo } from "../CarouselProximo";


//importação das imagens/videos dos clientes
import backgroundMiniatura from '../../assets/svg/backgroundMiniatura.svg'
import atosConvencao2021 from '../../assets/videoParceiros/atosConvencao2021.mp4'

//importação  das img dos cards
import cardSap from '../../assets/lotes/cardSap.jpg'
import cardB1Alliance from '../../assets/lotes/cardB1Alliance.jpg'

//importação das img dos logos
import seidor from '../../assets/logos/seidor.png'
import ramo from '../../assets/logos/ramo.png'
import nordware from '../../assets/logos/nordware.png'
import uppertools from '../../assets/logos/uppertool.png'
import alfa from '../../assets/logos/alfa.png'
import integrate from '../../assets/logos/integrate.png'
import pwit from '../../assets/logos/pwit.png'

export function Parceiros() {

    const {t} = useTranslation()

    return (
        <Container id="clientes">

            {/* responsavel por exibir um carousel (componente ja criado) e adicionar as informações de cada card que será exibido nesse carousel, o (componente do card ja criado com seus devidos atributos) */}
            <ContainerSlideCardParceiro>
                
                {/* componente carousel, responsavel por passar e voltar os cards */}
                <CarouselProximo>
                    
                    {/* componente card, responsavel por armazenar e exibir as informações que existirão no card */}
                    <CardImgEVideo
                        linkImagem={backgroundMiniatura}
                        linkVideo={atosConvencao2021}
                        linkFacebook="#"
                        linkInstagram="#"
                        linkWWW="#"
                        title="Nome do Cliente 1"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra."
                    />

                    <CardImgEVideo
                        linkImagem={backgroundMiniatura}
                        linkVideo={atosConvencao2021}
                        linkFacebook="#"
                        linkInstagram="#"
                        linkWWW="#"
                        title="Nome do Cliente 2"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra."
                    />

                    <CardImgEVideo
                        linkImagem={backgroundMiniatura}
                        linkVideo={atosConvencao2021}
                        linkFacebook="#"
                        linkInstagram="#"
                        linkWWW="#"
                        title="Nome do Cliente 3"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra."
                    />

                    
                    <CardImgEVideo
                        linkImagem={backgroundMiniatura}
                        linkVideo={atosConvencao2021}
                        linkFacebook="#"
                        linkInstagram="#"
                        linkWWW="#"
                        title="Nome do Cliente 4"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra."
                    />
                    
                    <CardImgEVideo
                        linkImagem={backgroundMiniatura}
                        linkVideo={atosConvencao2021}
                        linkFacebook="#"
                        linkInstagram="#"
                        linkWWW="#"
                        title="Nome do Cliente 5"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra."
                    />
                    
                    <CardImgEVideo
                        linkImagem={backgroundMiniatura}
                        linkVideo={atosConvencao2021}
                        linkFacebook="#"
                        linkInstagram="#"
                        linkWWW="#"
                        title="Nome do Cliente 6"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra."
                    />

                </CarouselProximo>
                
            </ContainerSlideCardParceiro>

            <div id="parceiros" className="infoParceiros">
                
                {/* Titulo da section*/}
                <section>                    
                    <h3 className="titulos">{t("ParceirosH2")}</h3>
                </section>

                
                {/* Responsavel por exibir os cards dos parceiros*/}
                <ContainerCards>
                    <Card>
                        <img src={cardSap} alt="" />

                        
                        <section>
                            {/* Como SAP não precisa ter tradução não foi necessario usar o hook useTranslation*/}
                            <h4>SAP</h4>

                            <p>{t("SapP1")}</p>
                            <p>{t("SapP2")}</p>
                            <p>{t("SapP3")}</p>
                        </section>
                    </Card>

                    <Card>
                        <img src={cardB1Alliance} alt="" />

                        <section>
                            {/* Como B1Alliance não precisa ter tradução não foi necessario usar o hook useTranslation*/}
                            <h4>B1 Alliance</h4>

                            <p>{t("B1AllianceP1")}</p>   
                            <p>{t("B1AllianceP2")}</p>   
                            <p>{t("B1AllianceP3")}</p>   
                            <p>{t("B1AllianceP4")}</p>
                        </section>                      
                    </Card>
                </ContainerCards>

                {/* Responsavel por exibir as logos dos parceiros*/}
                <ContainerLogoParceiros>
                    <img src={seidor} alt="Logo Seidor" />
                    <img src={ramo} alt="Logo Ramo Sistemas Digitais" />
                    <img src={nordware} alt="Logo Nordware" />
                    <img src={uppertools} alt="Logo Uppertools" />
                    <img src={alfa} alt="Logo Alfa sistemas de gestão" />
                    <img src={integrate} alt="Logo Integrate" />
                    <img src={pwit} alt="Logo PWIT" />
                </ContainerLogoParceiros>
            </div>

        </Container>
    )
}