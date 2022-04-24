import { ValidationError} from 'yup'

interface Errors {
    [key: string]: string
}

//função que retorna um objeto de erros
export default function getValidationErrors(err: ValidationError): Errors{

    const validationErrors: Errors = {}

    err.inner.forEach(error => {
        validationErrors[error.path as string] = error.message
    })

    return validationErrors
}