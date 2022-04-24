//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { Container, ContainerDiv1, ContainerDiv2 } from "./styles";
import { NumeroParaContato } from "../NumeroParaContato";
import { LinkRedeSocial } from "../LinkRedeSocial";

//logos utilizadas no footer 
import logoAtosCapital from "../../assets/logos/logo-atos.svg"
import logoSapPartner from "../../assets/logos/sap-partner.svg"
import logoB1Alliance from "../../assets/logos/Logo-white.png"

export function Footer() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    return(
        <Container>
            <ContainerDiv1>
                <section>
                    <img src={logoAtosCapital} alt="Logo Atos Capital" />
                </section>

                <section>
                    <img src={logoSapPartner} alt="Logo Sap Partner" />
                    <img src={logoB1Alliance} alt="Logo B1 Alliance" />
                </section>
                
                {/* exibindo informações de endereço 1 */}
                <section>
                    <address>
                        {t("Address1")}<br/>
                        Avenida Paulista, 575 - Edifício Barão de Ouro<br/>
                        Branco, 19º Andar - Bela Vista<br/>
                        São Paulo - SP<br/>
                        {/* utilizando componente para obter o numero de contato 1 */}
                        <NumeroParaContato telefoneOption="Numero1"/>
                        <span className="emailAtos">atendimento@atoscapital.com.br</span><br/>
                    </address>
                </section>

                {/* exibindo informações de endereço 2 */}
                <section>
                    <address>
                        {t("Address2")}<br/>
                        Rua dr. Roberto Ribeiro, 78 - Grageru<br/>
                        Aracaju - SE<br/>
                        {/* utilizando componente para obter o numero de contato 2 */}
                        <NumeroParaContato telefoneOption="Numero2"/>
                        <span className="emailAtos">atendimento@atoscapital.com.br</span><br/>
                    </address>
                </section>

            </ContainerDiv1>

            <ContainerDiv2>
                {/* utilizando um componente para obter os links das redes sociais da Atos Capital  */}
                <section>
                    <LinkRedeSocial redeSocialOption="Instagram"/>
                    <LinkRedeSocial redeSocialOption="Facebook"/>
                    <LinkRedeSocial redeSocialOption="LinkedIn"/>
                </section>

                {/* links criados para exibir as politicas de privacidades da empresa (ainda não configurado) */}
                <section>
                    <a href="#">{t("politicaDePrivacidade1")}</a>
                    <a href="#">{t("politicaDePrivacidade2")}</a>
                </section>
            </ContainerDiv2>
        </Container>
    )
}