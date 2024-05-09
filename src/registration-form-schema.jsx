import * as yup from "yup";

export const registrationFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Заполните почту")
    .email("Почта введена неверно"),
  password: yup
    .string()
    .required("Заполните пароль")
    .min(8, "Пароль должен быть не менее 8 символов")
    .matches(/^\S+$/, "Пароль должен состоять из букв, цифр и символов")
    .matches(/[a-zA-Z]+/, "Пароль должен состоять из букв, цифр и символов")
    .matches(/[0-9]+/, "Пароль должен состоять из букв, цифр и символов")
    .matches(/\w+/, "Пароль должен состоять из букв, цифр и символов"),
  repeatPassword: yup.string()
    .required("Заполните повтор пароля")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});
