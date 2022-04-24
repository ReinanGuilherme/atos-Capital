import styled from "styled-components";

import backgroundQuemSomos from '../../assets/lotes/backgroundQuemSomos.jpg'

export const Container = styled.div`

    //primeira div dentro do Container
    div:nth-child(1) {
        min-height: 454px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        padding: 70px 79px 25px 70px;

        background-image: url(${backgroundQuemSomos});

        

        h2 {
            margin-bottom: 50px;
            padding-left: 100px;
        }

        p {
            max-width: 1322px;
            font-size: 16pt;
            font-family: FonteAtosMedium;
            line-height: 1.5;
        }

        @media (max-width: 415px) {

            padding: 15px 25px;   
        }
    }

`

export const ContainerTimeAtosCapital = styled.div`

    img {
        max-height: 730px;
        width: 100%;
        margin: 0;
        box-sizing: content-box;
        border-bottom: 30px solid var(--redType01);
    }    

`