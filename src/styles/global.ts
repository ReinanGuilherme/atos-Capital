import { createGlobalStyle } from 'styled-components'

// importação das fontes que serão usadas no projeto
import FonteAtosBold from '../assets/fontes/Montserrat-Bold.otf'
import FonteAtosMedium from '../assets/fontes/Montserrat-Medium.otf'
import FonteAtosRegular from '../assets/fontes/Montserrat-Regular.otf'

//configuração dos estilos de uso globais
export const GlobalStyle = createGlobalStyle`

//variavel da maioria das cores utilizadas no projeto
:root {
    --grayType01: #43464E;
    --grayType02: #343638;
    --grayType03: #202124;
    --grayType04: #F0F0F0;

    --redType01: #7e1416;
    --redType02: #731C24;
    --redType03: #4D0303;
    --redType04: #600000;

    --blueType01: #DBE2EA;
    --blueType02: #A6ADB4;

    --whiteText: #fff;
    --colorText1: #756F86;
}

//importação das fontes externas
@font-face {
    font-family: FonteAtosBold;
    src: url(${FonteAtosBold});
}

//importação das fontes externas
@font-face {
    font-family: FonteAtosMedium;
    src: url(${FonteAtosMedium});
}

//importação das fontes externas
@font-face {
    font-family: FonteAtosRegular;
    src: url(${FonteAtosRegular});
}

//classe criada para padronizar os titulos
.titulos {
    display: inline-block;
    font-size: 40pt;
    font-family: FonteAtosBold;
    border-bottom: 5px solid var(--redType01);
}

//classe criada para padronizar os paragrafos
.textos {
    font-size: 20pt;
    font-family: FonteAtosMedium;
}

//estilizando o overlay do modal
.react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

//ajustando o elemento video do content do modal
.react-modal-content {

    .videoActive {

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            background: transparent;
            font-size: 20pt;
            color: white;
            position: absolute;
            right: 8%;
            top: 8px;
            z-index: 1;
        }
    }
}

//ajustando os elementos do modal (ver mais) das soluções
.react-modal-contentSolucoes {
        min-height: 500px;
        max-width: 550px;
        width: 100%;
        margin: auto;
        color: var(--whiteText);
        background: var(--redType01)
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    button {        
        cursor: pointer;
        border: none;
    }

    button, input, textarea {
        outline: none;
    }

`