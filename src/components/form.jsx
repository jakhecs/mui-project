"use client";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    reset,
    register,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  };
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email obligatoire",
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email && <p className="error">{`${errors.email.message}`} </p>}
      <input
        {...register("password", {
          required: "Mot de passe obligatoire",
          minLength: {
            value: 5,
            message: "Le mot de passe doit avoir minimum 5 caractère",
          },
        })}
        type="password"
        placeholder="Mot de passe"
      />
      {errors.password && (
        <p className="error">{`${errors.password.message}`} </p>
      )}

      <input
        {...register("confirmPassword", {
          required: "Confirmer le mot de passe SVP",
          validate: (value) =>
            value === getValues("password") ||
            "Les mots de passe doivent être identiques",
        })}
        type="password"
        placeholder="Confirmer mot de passe "
      />
      {errors.confirmPassword && (
        <p className="error">{`${errors.confirmPassword.message}`} </p>
      )}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Wrapper>
  );
};

export default Form;
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  background: lightblue;
  margin: 5px 40px;
  border-radius: 0.25rem;
  padding: 15px;

  p {
    color: red;
    margin-left: 10px;
  }

  input {
    border-radius: 0.25rem;
    padding: 1rem 0.5rem;
    border: 1px solid #1976d2;
    font-size: medium;
  }
  button {
    background-color: #1976d2;
    border: 1px solid #1976d2;
    border-radius: 0.25rem;
    font-size: medium;

    padding: 1rem 0.5rem;
    &:disabled {
      opacity: 1;
      background-color: gray;
      color: white;
    }
  }
`;
