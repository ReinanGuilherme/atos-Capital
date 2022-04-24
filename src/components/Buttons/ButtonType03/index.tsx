//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes estilizados
import { Container } from "./styles";

//interface criada para que seja necessario passar uma função para que esse button execute.
interface propsButtonType03 {
    onOpenModal: () => void
}

//retorna um botão com uma estilização personalizada
export function ButtonType03({onOpenModal}: propsButtonType03) {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    return(
        //Botão executa um modal pop-up que exibe informações adicionais para o usuario
        <Container onClick={onOpenModal}>
            {t("ButtonType03")}    
        </Container>
    )

}