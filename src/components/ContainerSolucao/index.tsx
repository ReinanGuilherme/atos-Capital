//metodos react utilizados
import { useState } from 'react';

//import dos componentes personalizados
import { Container, ContainerButton, ContainerModal } from "./styles";
import { ButtonType03 } from "../Buttons/ButtonType03";
import Modal from 'react-modal'

//import dos icones SVGs utilizados
import {RiCloseCircleFill} from 'react-icons/ri'

//interface criada para receber os elementos necessarios para exibição da solução
interface PropsContainerSolucao {
    logo: string
    alt: string
    popUp: string
}

//componente responsavel por exibir as soluções e atraves do componente Button abrir um pop-up com as informações da solução.
export function ContainerSolucao({logo, alt, popUp}: PropsContainerSolucao) {

    //estado que o modal se encontra, inicia como falso
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)

    //função que faz o modal da solução ser exibido
    function handleOpenPopUp() {
        setIsOpenPopUp(true)
    }

    //função que fecha o modal do video
    function handleClosePopUp() {
        setIsOpenPopUp(false)
    }

    return (
        <Container>
            <div>
                {/* exibindo imagem do produto/solução */}
                <img src={logo} alt={alt} />
            </div>
            
            <ContainerButton>    
                {/* Botão responsavel por abrir o modal para verificar mais informações sobre a solução */}            
                <ButtonType03 onOpenModal={() => handleOpenPopUp()}/>

                {/* Modal solução onde se encontra a imagem da solução, e uma descrição da solução */}
                <Modal
                    isOpen={isOpenPopUp}
                    onRequestClose={handleClosePopUp}
                    ariaHideApp={false}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-contentSolucoes"
                >                    
                    <ContainerModal>
                        <div>
                            {/* Botão que fecha o modal*/}
                            <button onClick={handleClosePopUp}><RiCloseCircleFill/></button>
                            {/* imagem exibida no modal */}
                            <img src={logo} alt={alt} />
                        </div>
                        
                        {/* descrição do produto exibido no modal */}
                        <p className='textos'>{popUp}</p>
                    </ContainerModal>
                </Modal>
            </ContainerButton>
        </Container>
    )
}