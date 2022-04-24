import { Container } from "./styles";

interface propsToolTip {
    title: string
    children: JSX.Element[] | JSX.Element
}

// retorna a mensagem de erro atraves de um hover
export function Tooltip({title, children}: propsToolTip) {
    return (
        <Container>
            {children}
            <span>{title}</span>
        </Container>
    )
}