import styled from "styled-components";

//import da imagem utilizada como background do header
import CarroSap from '../../assets/lotes/CarroSap.jpg'

// componente div personalizado para a (Header)
export const Container = styled.header`

`

export const AreaHeader = styled.div`

    height: 900px;
    background-image: url(${CarroSap});
    background-size: cover;
    background-position: center;

    h1 {
        max-width: 994px;
        padding-bottom: 10px;
        padding-right: 25px ;
        
        font-family: FonteAtosBold;
        font-size: 35pt;
        color: var(--whiteText);
        border-bottom: 4px solid;

        position: absolute;

        margin-left: 345px;
        margin-top: 270px;
    }

    //responsividade dos elementos
    @media (max-width: 1800px) {
        
        h1 {
            margin-left: 100px;
        }

    }

    @media (max-width: 1570px) {

        height: 580px;
        
        h1 {
            margin-left: 50px;
            margin-top: 150px;
        }
        
    }

    @media (max-width: 1075px) {
        
        h1 {
            margin-right: 25px;
            font-size: 35pt;
        }
    }

    @media (max-width: 700px) {
        h1 {
            margin-left: 25px;
            font-size: 25pt;
        }
    }
`