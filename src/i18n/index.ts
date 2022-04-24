//impor necessario para realizar a configuração do tradutor da pagina
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//importando as traduções
import portuguesJSON from './translations/portuguesBR.json'
import inglesJSON from './translations/ingles.json'
import espanholJSON from './translations/espanhol.json'

//configurando a inicialização da biblioteca
i18next.use(initReactI18next).init({
    //fallbackLng - atributo que define a linguagem inicial do site, caso o usuario não tenha escolhido o idioma.
    fallbackLng: "por",
    interpolation: {
        escapeValue: false
    },
    //resource - armazena as referencias das traduções do site
    resources: {
        por: portuguesJSON,
        ing: inglesJSON,
        esp: espanholJSON
    }
})