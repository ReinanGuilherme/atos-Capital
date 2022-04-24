//import dos componentes personalizados
import { Container } from "./styles"

//import dos icones SVGs utilizados
import { BsLinkedin } from "react-icons/bs"
import { IconFacebookSVG } from "../IconSVG/IconFacebook"
import { IconInstagramSVG } from "../IconSVG/IconInstagram"

//interface criada para que obrigue a escolha da rede social de acordo com o uso do componente.
interface PropsLinkRedeSocial {
    redeSocialOption: "Facebook" | "Instagram" | "LinkedIn"
}

//retorna um link que redireciona para a rede social selecionada
export function LinkRedeSocial({redeSocialOption} : PropsLinkRedeSocial) {

    //array de objetos armazenando as informações de cada rede social que será exibida
    const redesDaEmpresa = [
        {
            redeSocial: "Facebook",
            link: "https://www.facebook.com/atoscapital/?ti=as",
            img: <IconFacebookSVG/>,
            alt: "icone do Facebook"
        },
        {
            redeSocial: "Instagram",
            link: "https://instagram.com/atoscapital?utm_medium=copy_link",
            img: <IconInstagramSVG/>,
            alt: "icone do Instagram"
        },
        {
            redeSocial: "LinkedIn",
            link: "https://www.linkedin.com/company/atos-capital",
            img: <BsLinkedin/>,
            alt: "icone do LinkedIn"

        }
    ]

    //função find sendo usada para extrair do array as informações da rede social que foi selecionada no componente
    const redeSelecionada = redesDaEmpresa.find( redeDaEmpresa => redeDaEmpresa.redeSocial === redeSocialOption)

    //retorna um link de acordo com a redeSocialOption informada.
    return(
            <Container href={redeSelecionada?.link} target={"_blank"}>{redeSelecionada?.img}</Container>
    )
}