//import dos componentes personalizados
import { Container } from './styles'

//interface criada para que seja selecionado um dos dois tipos de numeros para contato da empresa
interface PropsLinkTelefone {
    telefoneOption: "Numero1" | "Numero2"
}

//retorna um componente com um link configurado para contatar a empresa.
export function NumeroParaContato({telefoneOption}: PropsLinkTelefone) {

    //array de objetos com as informações de numero para contato da empresa
    const numerosParaContato = [
        {
            idNumero: "Numero1",
            linkParaContato: " tel:+55-11-3522-7018",
            numeroParaContato: "11 3522 7018"
        },
        {
            idNumero: "Numero2",
            linkParaContato: " tel:+55-79-3042-4048",
            numeroParaContato: "79 3042 4048"
        }
    ]

    //função find sendo usada para extrair do array as informações do telefone selecionado
    const numeroSelecionado = numerosParaContato.find(numeroParaContato => numeroParaContato.idNumero === telefoneOption)

    //retorna o link com o numero do telefone selecionado
    return (  
        <Container>                  
            <a href={numeroSelecionado?.linkParaContato}><span>{numeroSelecionado?.numeroParaContato}</span></a>
        </Container>
    )
}