import styled from "styled-components";

//container principal
export const Container = styled.div`

    min-height: 391px;
    min-width: 499px;
    background: #fff;
    border-radius: 25px;

    display: grid;
    grid-template-columns: 233px 1fr;
    grid-template-rows: 151px 40px 1fr;
    grid-template-areas: "videoEimg titulo"
                        "videoEimg link"
                        "descricao descricao";

    section {  
        
        grid-area: videoEimg;
        position: relative;    

        img {
            height: 191px;
            width: 233px;
            border-radius: 25px;

            grid-area: videoEimg;
            margin-top: -20px;
            margin-left: -24px;

            background: var(--redType01);
             

        }

        button {
            position: absolute;
            top: -20px;
            bottom: 0;
            left: -24px;
            right: 0;
            background: transparent;

            svg {
                height: 43px;
                width: 43px;
            }

        }
    }

    h3 {
        grid-area: titulo;
        margin: auto 0;
        font-size: 30pt;
        font-family: FonteAtosBold;
    }

    div {
        grid-area: link;

        svg {
            
            margin-right: 15px;
        }
    }

    .description {
        grid-area: descricao;

        padding: 25px;

        p {
            max-width: 350px;
            line-height: 1.5;
            margin: auto;
            font-size: 20pt;
            font-family: FonteAtosMedium;
        }

        svg:nth-child(3) {
            float: right;
        }
    }   

@media (max-width: 1460px) {
    min-width: 425px;

    
    h3 {
        font-size: 25pt;
    }
}

@media (max-width: 1260px) {
    min-width: 350px;
    
    grid-template-columns: 180px 1fr;

    section {
        
        img {
            height: 160px;
            width: 180px;
        }

        button {
            top: -50px;
        }
    }

    h3 {
        font-size: 23pt;
    }

    p {
        font-size: 15pt;
    }
}

@media (max-width: 1020px) {
    min-width: 499px;
}

@media (max-width: 710px) {
    grid-template-columns: 1fr;
    grid-template-rows: 160px 100px 20px 1fr;
    grid-template-areas: "videoEimg"
                        "titulo"
                        "link"
                        "descricao";
    min-width: 250px;

    section {
        img {
            width: 100%;
            margin: 0;
        }

        button {
            top: 0;
        }
    }

    h3 {
        text-align: center;
        margin-bottom: 15px;
    }

    div {
        text-align: center;
    }

    .description {
        
        svg:nth-child(1) {
            float: left;
        }
    }

}
`