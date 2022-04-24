//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes estilizados
import { Container } from "./styles";

//retorna um botão com uma estilização personalizada
export function ButtonType04() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()
    
    //retorna um botão com uma estilização personalizada e um texto pre-configurado
    return(
        <Container>
            {t("ButtonType04")}
        </Container>
    )

}