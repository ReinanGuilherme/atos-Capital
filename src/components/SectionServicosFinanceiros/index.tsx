//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { Container, ContainerServicosFinanceiros } from "./styles";
import { ContainerSolucao } from "../ContainerSolucao";

//import imagens das soluções que serão exibidas
import b1Cards from '../../assets/logos/b1Cards.svg'
import b1Pay from '../../assets/logos/b1Pay.svg'
import b1Bill from '../../assets/logos/b1Bill.svg'
import b1TaxInvoice from '../../assets/logos/B1TaxInvoice.svg'
import b1Expenses from '../../assets/logos/b1Expenses.svg'
import cards4 from '../../assets/logos/cards4.svg'
import cardservices from '../../assets/logos/cardservices.svg'
import taxservices from '../../assets/logos/marca_taxservices-01.svg'

export function ServicosFinanceiros() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    //retorna as opções de serviços da Atos Capital
    return (
        <Container id="solucoes">

            <ContainerServicosFinanceiros>
                <div className="h2ServicosFinanceiros">
                    <h2 className="titulos">{t("ServicosFinanceirosH2")}</h2>
                </div>

                {/* atribuindo as soluções e seus respectivos atributos como imagem e descrição do ver mais */}
                <div className="ContainerSolucao">
                    <ContainerSolucao popUp={t("B1Cards")} logo={b1Cards} alt="B1 Cards"/>
                    <ContainerSolucao popUp={t("B1Pay")} logo={b1Pay} alt="B1 Pay"/>
                    <ContainerSolucao popUp={t("B1Bill")} logo={b1Bill} alt="B1 Bill"/>
                    <ContainerSolucao popUp={t("B1TaxInvoices")} logo={b1TaxInvoice} alt="B1 Tax Invoice"/>
                    <ContainerSolucao popUp={t("B1Expenses")} logo={b1Expenses} alt="B1 Expenses"/>
                    <ContainerSolucao popUp={t("Cards4")} logo={cards4} alt="cards4"/>
                    <ContainerSolucao popUp={t("CardServices")} logo={cardservices} alt="Card Services"/>
                    <ContainerSolucao popUp={t("TaxServices")} logo={taxservices} alt="tax Services"/>
                </div>
            </ContainerServicosFinanceiros>
                        
        </Container>
    )
}