//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { Container, ContainerTimeAtosCapital } from "./styles";

//import da imagem que servirá de referencia do time da Atos Capital
import timeAtosCapital from '../../assets/lotes/timeAtosCapital.jpg'

export function QuemSomos() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    return (
        <Container id="quemSomos">    
            {/* uma breve explicação sobre a Atos Capital */}        
            <div>
                <h2 className="titulos">{t("QuemSomosH2")}</h2>
                <p>{t("QuemSomosP1")}</p>
                <p>{t("QuemSomosP2")}</p>
                <p>{t("QuemSomosP3")}</p>
                <p>{t("QuemSomosP4")}</p>
            </div>
            
            {/* exibição da imagem do time da Atos Capital */}
            <ContainerTimeAtosCapital>
                <img src={timeAtosCapital} alt="Time Atos Capital" />
            </ContainerTimeAtosCapital>
        </Container>
    )
}