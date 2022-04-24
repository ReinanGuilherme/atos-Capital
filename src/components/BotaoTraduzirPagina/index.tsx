//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes estilizados
import { Container } from "./styles";

//import dos icons SVG que servirão como referencia visual.
import por from '../../assets/svg/br.svg'
import ing from '../../assets/svg/eua.svg'
import esp from '../../assets/svg/espanha.svg'

//componente criado para alterar o idioma dos conteudos da pagina de acordo com o que o usuario selecionar.
export function BotaoTraduzirPagina() {
    
    //desestruturando os metodos que serão necessarios para a criação do componente onde ira mudar o idioma selecionado
    const {i18n} = useTranslation()

    //pre-configuração dos idiomas disponiveis que poderão ser exibidos
    //objetos armazenados em array para facilitar na hora da manipulação dos elementos
    const languages = [
        {
            name: "ingles",
            value: "ing",
            flag: ing
        },
        {
            name: "espanhol",
            value: "esp",
            flag: esp
        },
        {
            name: "portugues",
            value: "por",
            flag: por
        }
    ]
    
    //retorna uma div com botões com as bandeiras dos paises que o idioma se refere
    return (
        <Container>
            {/* map para percorrer todos elementos do array e gerar os botões de acordo com os objetos definidos */}
            {languages.map(language => {
                return (
                    <button
                    key={language.name}
                        //metodo que altera o idioma de acordo com qual botão recebeu o click.
                        onClick={() => {
                            i18n.changeLanguage(language.value)
                        }}
                    >
                        {/* adicionando a imagem das bandeiras dentro do botão */}
                        <img src={language.flag} alt={`Bandeira que representa o idioma ${language.name}`} />
                    </button>
                )
            })}
        </Container>
    )
}