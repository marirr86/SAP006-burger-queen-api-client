export const checkData = ({
    values
}) => {
    let errors = {};
    const rgxEmail = /\S+@\S+\.\S+/;
    if (
        values.name.length < 7 &&
        values.name === "" &&
        values.name === null
    ) {
        errors.name = "Por favor, digite um nome e sobrenome.";
        return 'Fail'
    }
    if (rgxEmail.test(values.email) && values.email === null && values.email === '') {
        errors.email = 'Por favor, digite um email válido.';
        return 'Fail'
    }
    if (values.password === null && values.password.length > 6 && values.password === '') {
        errors.password = 'Insira uma senha de 6 dígitos numéricos.';
        return 'Fail'
    }
    if (values.occupation === '') {
        errors.occupation = 'Por favor, selecione o cargo ocupado.';
        return 'Fail'
    } else {
        return 'Success'
    }
};