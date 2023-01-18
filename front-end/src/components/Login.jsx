import { useEffect, useRef } from "react";
import {
  LoginContainer,
  FormContainer,
  TInput,
  InputContainer,
  Title,
  RegisterButton,
  RegisterButtonContainer,
  SubmitButton,
  SubmitButtonContainer,
} from "../assets/styledComponents/Main";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../app/reducer/auth/authSlice";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, isSuccess, message, isLoading, user } = useSelector(
    (state) => state.auth
  );
  const emailRef = useRef();
  const pwordRef = useRef();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: emailRef.current.value,
        password: pwordRef.current.value,
      })
    );
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <TInput
              type="email"
              ref={emailRef}
              placeholder="Email"
              maxLength={30}
            />
          </InputContainer>
          <InputContainer>
            <TInput
              type="password"
              ref={pwordRef}
              placeholder="Password"
              maxLength={20}
            />
          </InputContainer>
          <SubmitButtonContainer>
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? "loading ..." : "SUBMIT"}
            </SubmitButton>
          </SubmitButtonContainer>
        </form>
      </FormContainer>
      <RegisterButtonContainer>
        <RegisterButton type="button" onClick={() => navigate("/register")}>
          Don't have an account ? Register here.
        </RegisterButton>
      </RegisterButtonContainer>
    </LoginContainer>
  );
}
