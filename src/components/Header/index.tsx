//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { AreaHeader, Container } from "./styles";
import { BarraAcimaDoMenu } from "../BarraAcimaDoMenu";
import { Menu } from "../Menu";

export function Header() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const { t } = useTranslation()

    return (
        <Container>
            {/*  componente onde exibe as informações da barra acima do menu*/}
            <BarraAcimaDoMenu/>
            {/*  componente onde exibe as informações do menu*/}
            <Menu/>
            {/*  componente onde exibe um h1 com um background personalizado*/}            
            <AreaHeader>
                <h1>{t("HeaderH1")}</h1>
            </AreaHeader>
        </Container>
    )
}