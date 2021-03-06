import React, { FC, useState, useCallback } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { Button as ButtonBase, Input } from "../../components";
import { useHistory } from "react-router-dom";
import { isEmail, isRequired, length } from "../../validators";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";

const composeValidators =
  (...validators: any[]) =>
  (value: string) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  height: calc(100% - 2rem);
`;

const Button = styled(ButtonBase)`
  align-self: flex-end;
  width: 100%;
  height: 2.75rem;
  font-size: 1.125rem;
  margin: 0 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  flex: 2;
`;

type LoginFormProps = {};

const LoginForm: FC<LoginFormProps> = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const handleSubmitForm = useCallback(() => {
    setLoading(true);
    login();
    setTimeout(() => {
      setLoading(false);
      history.push("/dashboard");
    }, 3000);
  }, [history, login]);

  return (
    <Form
      onSubmit={handleSubmitForm}
      render={({ handleSubmit }) => (
        <SForm onSubmit={handleSubmit}>
          <Field name="email" validate={composeValidators(isEmail, isRequired)}>
            {(props) => <Input type="email" {...props} />}
          </Field>
          <Field
            name="password"
            validate={composeValidators(isRequired, length)}
          >
            {(props) => <Input type="password" {...props} />}
          </Field>
          <ButtonContainer>
            <Button type="submit" disabled={loading} loading={loading}>
              Login
            </Button>
          </ButtonContainer>
        </SForm>
      )}
    />
  );
};

export default LoginForm;
