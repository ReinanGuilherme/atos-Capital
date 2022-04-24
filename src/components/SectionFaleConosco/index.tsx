//import do componente onde existe a referencia dos textos traduzidos
import { useTranslation } from "react-i18next";

//import dos componentes personalizados
import { ButtonType02 } from "../Buttons/ButtonType02";
import { Container, ContainerFaleConosco } from "./styles";

//metodos/componentes utilizados para a validação do formulario
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup"
import { useCallback, useRef, useState } from "react";
import { FaleConoscoInput } from "../FaleConoscoInput";
import { FaleConoscoTextArea } from "../FaleConoscoTextArea";
import getValidationErrors from "../FaleConoscoGetValidationErrors";

//pagina Fale Conosco, onde exibirá um formulario para que o usuario consiga enviar uma mensagem para a empresa
export function FaleConosco() {

    //desestruturando o metodo que irá fornecer os textos conforme o idioma selecionado
    const {t} = useTranslation()

    //criando referencia para acessar o formulario atraves do ref
    const formRef = useRef<FormHandles>(null)

    //armazenando o estado da mensagem de sucesso
    const [msgSucesso, setMsgSucesso] = useState(false)

    //metodo submit que irá validar se todos os campos estão devidamente preenchidos.
    const handleSubmit = useCallback( async (data: object) => {
        try {
            //zerando os erros
            formRef.current?.setErrors({})

            //iniciando a variavel msgSucesso como falso, para que não aparece nenhuma mensagem inicialmente para o usuario
            setMsgSucesso(false)

          const schema = Yup.object().shape({
            nome: Yup.string().required(t("NomeTextoObrigatorio")),
            email: Yup.string().required(t("EmailTextoObrigatorio")).email(t('EmailTextoValido')),
            mensagem: Yup.string().min(10, t("MensagemTextoObrigatorio"))
          })
    
          await schema.validate(data, {
            abortEarly: false
          })

          //caso as informações do formulario estejam todas corretas, passamos para parte de sucesso.
          //zerando os campos do formulario, pois a mensagem foi enviada com sucesso.
          formRef.current?.setFieldValue("nome", "")
          formRef.current?.setFieldValue("email", "")
          formRef.current?.setFieldValue("mensagem", "")
          //atribuindo o valor true para o estado msgSucesso para que possa ser exibida uma mensagem confirmando que o formulario foi enviado
          setMsgSucesso(true)

        } catch (err: any) {
            //setando os erros de validação do formulario
            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors)
        }
      }, [])

    return (
        <Container id="contato">
            <section className="faleConoscoH2">
                <h2 className="titulos">{t("FaleConoscoH2")}</h2>
            </section>

            {/* formulario onde o usuario poderá preencher o nome, email e uma breve mensagem para que a empresa entre em contato com ele. */}
            <ContainerFaleConosco>
                
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FaleConoscoInput name="nome" labelText={t("NomeLabel")}/>
                    <FaleConoscoInput name="email" labelText={t("EmailLabel")}/>
                    <FaleConoscoTextArea name="mensagem" labelText={t("MensagemLabel")}/>

                    <ButtonType02/>
                    {/* exibindo uma mensagem para o usuario ("Mensagem enviada com sucesso!") */}
                    {msgSucesso ? <span>Mensagem enviada com sucesso!</span> : null}
                </Form>
            </ContainerFaleConosco>
        </Container>
    )
}