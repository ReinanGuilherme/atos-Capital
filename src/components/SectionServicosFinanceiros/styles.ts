import styled from "styled-components";

import backgroundServicosFinanceiros from '../../assets/lotes/backgroundServicosFinanceiros.jpg'

export const Container = styled.div`

`

export const ContainerServicosFinanceiros = styled.div`


    min-height: 812px;
    padding: 70px 0 30px 0;
    background-image: url(${backgroundServicosFinanceiros});
    background-size: cover;

    .h2ServicosFinanceiros {

        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
            text-align: center;
            margin-bottom: 40px;
        }
    }

    .ContainerSolucao {
        max-width: 1401px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 19px;
    }

`