//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//importação dos componentes que alteram os idiomas do site
import { BotaoTraduzirPagina } from "../BotaoTraduzirPagina";

//import dos componentes personalizados
import { Container, ContainerLogo, ContainerNavegacaoPagina, ContainerTranslation } from "./styles";

//importação das logos
import LogoAtos from '../../assets/logos/logo-atos.svg'
import LogoSapPartner from '../../assets/logos/sap-partner.svg'
import LogoSapBusiness from '../../assets/logos/sap-business-one.svg'

export function Menu() {
    
    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    return(
        <Container>
            {/* Logos da empresa */}
            <ContainerLogo>
                <img className="logoAtosCapital" src={LogoAtos} alt="Logo Atos Capital" />
                <img className="logoSapPartner" src={LogoSapPartner} alt="Logo Sap Partner" />
                <img className="logoSapBusiness" src={LogoSapBusiness} alt="Logo Sap Business" />
            </ContainerLogo>

            {/* Menu para rolar até os assuntos*/}
            <ContainerNavegacaoPagina>

                <ul className="menu">
                    <li className="dropDown">
                        <span>MENU</span>
                        <ul className="listaMenu">
                            <li><a href="#quemSomos">{t("QUEM_SOMOS")}</a></li>
                            <li><a href="#solucoes">{t("SOLUCOES")}</a></li>
                            <li><a href="#parceiros">{t("PARCEIROS")}</a></li>
                            <li><a href="#clientes">{t("CLIENTES")}</a></li>
                            <li><a href="#blog">{t("BLOG")}</a></li>
                            <li><a href="#contato">{t("CONTATO")}</a></li>
                        </ul>
                    </li>
                </ul>       
            </ContainerNavegacaoPagina>

            {/* Botões que irão traduzir o idioma do site */}
            <ContainerTranslation>
                <BotaoTraduzirPagina/>
            </ContainerTranslation>
        </Container>
    )
}