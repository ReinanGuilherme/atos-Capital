import styled from "styled-components";

export const Container = styled.div`
    min-height: 671px;
    padding: 35px 20px 72px 20px;

    background: var(--grayType04);

    display: grid;
    grid-template-columns: minmax(330px, 400px) minmax(330px, 755px);
    gap: 40px;
    justify-content: center;

    .faleConoscoH2 {
        color:  #1E1C24;
        //medida de 35px do padding que ja está sendo utilizado no container
        padding-top: calc(161px - 35px);
    }

    //apartir de 1100px terá apenas uma coluna
    @media (max-width: 1100px) {
        
        grid-template-columns: minmax(330px, 755px);
    }
`

export const ContainerFaleConosco = styled.div`  

    label {
        margin-bottom: 5px;
        color: var(--colorText1);
    }

    input {
        padding: 0 10px;
        height: 52px;
        width: 100%;
        font-size:20pt;
        font-family: FonteAtosRegular;
        color: var(--colorText1);
    }

    textarea {
        height: 227px;
        width: 100%;
        margin-bottom: 20px;
        padding: 10px;
        font-size:20pt;
        font-family: FonteAtosRegular;
        color: var(--colorText1);
    }

    label, input, textarea {
        display: block;
    }

    label + input {
        //33px é a medida do height do label, ja gerando um espaçamento adicional
        margin-bottom: calc(62px - 33px);
    }

    form {

        button {
            margin-right: 15px;
        }

        button + span {
            font-family: FonteAtosMedium;
            color: var(--redType01);            
        }

        @media (max-width: 465px) {
            button {
                float: left;
            }
        }
    }
`