import { useState } from "react";

//import dos componentes estilizados
import { Container } from "./styles";

//modal para exibição dos videos
import Modal from 'react-modal'

//icones SVG que serão utilizados
import { IconPlaySVG } from "../IconSVG/IconPlay";
import { IconQuoteDireitaSVG } from "../IconSVG/IconQuoteDireita";
import { IconQuoteEsquerdaSVG } from "../IconSVG/IconQuoteEsquerda";
import { IconFacebookSVG } from "../IconSVG/IconFacebook";
import { IconInstagramSVG } from "../IconSVG/IconInstagram";
import { IconWWWSVG } from "../IconSVG/IconWWW";
import {RiCloseCircleFill} from 'react-icons/ri'

//interface criada para receber os elementos necessarios para criação do card que ira conter imagem, video, links e textos
interface propsVideo {
    linkImagem: string
    linkVideo: string
    linkFacebook?: string
    linkInstagram?: string
    linkWWW?: string
    title: string
    description: string
}

//retorna um componente com uma miniatura de imagem, um video, um titulo, alguns links para as redes sociais e uma breve descrição
export function CardImgEVideo({linkImagem, linkVideo, linkFacebook, linkInstagram, linkWWW, title, description}: propsVideo) {

    //estado que o modal se encontra, inicia como falso
    const [openVideo, setOpenVideo] = useState(false)

    //função que faz o modal do video ser exibido
    function handleOpenVideo() {
        setOpenVideo(true)
    }

    //função que fecha o modal do video
    function handleCloseVideo() {
        setOpenVideo(false)
    }

    return (

        <Container>  

            {/* Exibindo imagem miniatura com um button de play do video */}          
            <section>
                <img src={linkImagem} alt="" />
                {/* Ao clicar no botão o modal com o video é exibido */}
                <button onClick={handleOpenVideo}><IconPlaySVG/></button>

                {/* Modal que será exibido */}
                <Modal
                    isOpen={openVideo}
                    onRequestClose={handleCloseVideo}
                    ariaHideApp={false}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                >
                    <div className="videoActive">                        
                        
                        {/* Botão que fecha o modal/video*/}
                        <button className="buttonClose" onClick={handleCloseVideo}><RiCloseCircleFill/></button>                        
                        
                        {/* Video que será exibido dentro do modal*/}
                        <video className="videoOpen" width="85%" src={linkVideo} controls autoPlay></video>
                    </div>
                </Modal>
            </section>

            {/* Titulo da miniatura */}
            <h3>{title}</h3>

            {/* Verifica se existe algum link para redes socias ou web sites caso exista adiciona um link juntamente com o icone para redirecionar o usuario até a rede social ou web site, caso não exista, não exibe o elemento */}
            <div>
                {linkFacebook ? <a href={linkFacebook} target="_blank"><IconFacebookSVG/></a>: ""}
                {linkInstagram ? <a href={linkInstagram} target="_blank"><IconInstagramSVG/></a>: ""}
                {linkWWW ? <a href={linkWWW} target="_blank"><IconWWWSVG/></a>: ""}
            </div>

            {/* Rolagem do carousel manual antes e depois */} 
            <div className="description">
                <IconQuoteEsquerdaSVG/>
                <p>{description}</p>
                <IconQuoteDireitaSVG/>
            </div>
            
        </Container>
    )
}