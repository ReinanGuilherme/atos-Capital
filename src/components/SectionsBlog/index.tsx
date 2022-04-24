//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { CarouselAutomatico } from "../CarouselAutomatico";
import { Container } from "./styles";

export function Blog() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    // retorna um titulo e um componente de carousel automatico
    return(
        <Container id="blog">
            <div className="blogTitle">
                <h2 className="titulos">{t("BlogH2")}</h2>
            </div>

            {/* retorna um componente de carousel automatico ja configurado*/}
            <CarouselAutomatico/>
        </Container>
    )
}