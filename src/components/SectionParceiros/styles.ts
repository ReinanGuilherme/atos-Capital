import styled from "styled-components";

export const Container = styled.div`
    min-height: 1661px;
    background: var(--grayType04) ;

    section {
        text-align: center;
    }

`

export const ContainerSlideCardParceiro = styled.div`

    min-height: 830px;
`

export const ContainerCards = styled.div`

    padding: 75px 25px 0 25px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:50px;

    img {
        width: 100%;
    }

`

export const Card = styled.section`

    background: #fff;
    max-width: 584px;

    section {
        min-height: 75px;
        padding: 40px;
        text-align: left;

        h4 {
            color: #202124;
            font-family: FonteAtosBold;
            font-size: 17pt;
        }

        p {
            color: var(--blueType02);
            font-family: FonteAtosMedium;
            font-size: 13pt;
            line-height: 1.5;
        }
    }
`

export const ContainerLogoParceiros = styled.div`
    
    padding: 60px 0 121px;
    min-height: 200px;
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px 40px;
    
    img {
        max-height: 65px;
    }

`