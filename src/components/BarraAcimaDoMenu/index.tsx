//import dos componentes que serão utilizados
//import do componente numero para contato, onde ja existe a configuração dos numeros da empresa
import { NumeroParaContato } from "../NumeroParaContato";
//import dos componentes estilizados
import { Container, ContainerTelContato, ContainerRedeSocial, ContainerEmail } from "./styles";

//import dos icons SVG que servirão como referencia visual.
import { BsFillTelephoneFill } from "react-icons/bs";
import { LinkRedeSocial } from "../LinkRedeSocial";

//Componente que exibe informações de contato com a empresa.
export function BarraAcimaDoMenu() {
    return (
        <Container>
            {/* Container onde está sendo armazenada as informações de e-mail */}
            <ContainerEmail>
                <p>atendimento@atoscapital.com.br</p>
            </ContainerEmail>

            
            {/* Container onde está sendo armazenada as informações de telefone para contato */}
            <ContainerTelContato>
                {/* links que redirecionam o usuario até um dos numeros de contato da empresa. */}
                <BsFillTelephoneFill/><NumeroParaContato telefoneOption="Numero1"/>
                <BsFillTelephoneFill/><NumeroParaContato telefoneOption="Numero2"/>
            </ContainerTelContato>

            {/* Container onde está sendo armazenada as informações de redirecionamento das redes sociais */}
            <ContainerRedeSocial>
                {/* links que redirecionam o usuario até uma das redes sociais da empresa, sem que ele saia do site da empresa. */}
                <LinkRedeSocial redeSocialOption="LinkedIn" />
                <LinkRedeSocial redeSocialOption="Instagram" />
            </ContainerRedeSocial>
        </Container>
    )
}