import styled from 'styled-components'


// componente div personalizado para a (Barra Acima do Menu)
export const Container = styled.div`
    height: 25px;
    font-size: 10px;
    font-family: FonteAtosBold, sans-serif;
    padding-right: 338px;    

    background: var(--grayType02);
    color: var(--whiteText);

    display: flex;
    align-items: center;
    justify-content: right;

    a {
        color: var(--whiteText);
    }

    @media (max-width: 1340px) {
        padding-right: 10px;
    }

    @media (max-width: 900px) {
        
        font-size: 9px;
        padding: 0 10px 0 10px;
    }

    @media (max-width: 380px) {
        font-size: 8px;
    }
`

//container onde é ajustado o campo com as informações de email
export const ContainerEmail = styled.div`
    height: 100%;
    width: 175px;

    display: flex;
    align-items: center;

    @media (max-width: 380px) {
        font-size: 7px;
    }
`

//container onde é ajustado o campo com as informações de telefone para contato
export const ContainerTelContato = styled.div`

    height: 100%;
    width: 180px;
    margin: 0 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--grayType01);

    
    @media (max-width: 900px) {
        
        margin: 0 5px;
    }
`

//container onde é ajustado o campo com os links das redes sociais
export const ContainerRedeSocial = styled.div` 
    height: 100%;
    width: 28px ;

    display: flex;
    align-items: center;
    justify-content: space-between;    

    svg {
        height: 10px;
        width: 10px;
    }

    svg path {
        fill: white;
    }

`