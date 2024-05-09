import styles from "./App.module.css";
import { useEffect, useRef } from "react";
import { Field } from "./components/field";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "./registration-form-schema";

function App() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { touchedFields, isValid, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    resolver: yupResolver(registrationFormSchema),
    mode: "onTouched",
  });

  const submitButtonRef = useRef(null);

  const onSubmit = ({ email, password }) => {
    console.log({ email, password });
  };

  useEffect(() => {
    if (isValid) {
      submitButtonRef.current.focus();
    }
  }, [isValid]);

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          type="text"
          placeholder="Почта..."
          error={errors.email?.message}
          {...register("email")}
        />
        <Field
          type="password"
          placeholder="Пароль..."
          error={errors.password?.message}
          {...register("password", {
            onChange: () => touchedFields.repeatPassword && trigger("repeatPassword"),
          })}
        />
        <Field
          type="password"
          placeholder="Повтор пароля..."
          error={errors.repeatPassword?.message}
          {...register("repeatPassword")}
        />
        <button type="submit" disabled={!isValid} ref={submitButtonRef}>
          Зарегестрироваться
        </button>
      </form>
    </div>
  );
}

export default App;
