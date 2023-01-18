import { useEffect, useRef } from "react";
import {
  RegisterContainer,
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
import { register, reset } from "../app/reducer/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const fnameRef = useRef("");
  const lnameRef = useRef("");
  const emailRef = useRef("");
  const pwordRef = useRef("");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, message, isSuccess]);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      register({
        fname: fnameRef.current.value,
        lname: lnameRef.current.value,
        email: emailRef.current.value,
        password: pwordRef.current.value,
      })
    );
  };

  return (
    <RegisterContainer>
      <Title>Register</Title>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <TInput
              type="text"
              ref={fnameRef}
              placeholder="First Name"
              maxLength={30}
            />
          </InputContainer>
          <InputContainer>
            <TInput
              type="text"
              ref={lnameRef}
              placeholder="Last Name"
              maxLength={20}
            />
          </InputContainer>
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
        <RegisterButton type="button" onClick={() => navigate("/login")}>
          Already have an account ? Login here.
        </RegisterButton>
      </RegisterButtonContainer>
    </RegisterContainer>
  );
}
