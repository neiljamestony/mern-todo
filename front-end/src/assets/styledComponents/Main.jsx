import styled from "styled-components";

export const LoginContainer = styled.div({
  width: "420px",
  height: "350px",
  display: "block",
  alignContent: "center",
  justifyContent: "center",
  boxShadow: "4px 4px 20px 0px #0000003d",
  borderRadius: 8,
  padding: 2,
  backgroundColor: "#fff",
  color: "#7882A4",
  position: "relative",
});

export const RegisterContainer = styled.div({
  width: "420px",
  height: "420px",
  display: "block",
  alignContent: "center",
  justifyContent: "center",
  boxShadow: "4px 4px 20px 0px #0000003d",
  borderRadius: 8,
  padding: 2,
  backgroundColor: "#fff",
  color: "#7882A4",
  position: "relative",
});

export const Title = styled.p({
  fontSize: 24,
});

export const FormContainer = styled.div({
  marginTop: 12,
});

export const TInput = styled.input({
  width: "70%",
  padding: 6,
  fontFamily: "Poppins",
  borderRadius: 5,
  border: "1px solid #7882A4",
  color: "#7882A4",
});

export const InputContainer = styled.div({
  display: "block",
  padding: 2,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 7,
});

export const RegisterButton = styled.button({
  backgroundColor: "#fff",
  padding: 8,
  borderRadius: 18,
  border: "1px solid #7882A4",
  fontFamily: "Poppins",
  fontSize: 8,
  cursor: "pointer",
  "&:hover": {
    boxShadow: "4px 4px 20px 0px #0000003d",
    backgroundColor: "#7882A4",
    color: "#fff",
  },
});

export const RegisterButtonContainer = styled.div({
  position: "absolute",
  bottom: 20,
  display: "flex",
  margin: 0,
  placeItems: "center",
  left: "30%",
});

export const SubmitButtonContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
});

export const SubmitButton = styled.button({
  backgroundColor: "#7882A4",
  padding: 8,
  borderRadius: 10,
  border: "1px solid #7882A4",
  fontFamily: "Poppins",
  fontSize: 11,
  cursor: "pointer",
  width: "50%",
  color: "#fff",
  boxShadow: "4px 4px 20px 0px #0000003d",
  "&:disabled": {
    backgroundColor: "#DFDFDE",
    border: "1px solid #DFDFDE",
    color: "#8D8DAA",
    boxShadow: "none",
    fontWeight: "bold",
  },
});

export const DashboardContainer = styled.div({
  width: 400,
  height: 600,
  backgroundColor: "#fff",
  boxShadow: "4px 4px 20px 0px #0000003d",
  borderRadius: 10,
});

export const DashboardHeader = styled.div({
  display: "flex",
  padding: 6,
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
});

export const AddTodoInput = styled.input({
  padding: 6,
  fontFamily: "Poppins",
  borderRadius: 5,
  border: "1px solid #7882A4",
  color: "#7882A4",
  flexGrow: 1,
  backgroundColor: "#f0f2f5",
});

export const AddTodoButton = styled.button({
  backgroundColor: "#7882A4",
  padding: 8,
  borderRadius: 10,
  border: "1px solid #7882A4",
  fontFamily: "Poppins",
  fontSize: 11,
  cursor: "pointer",
  color: "#fff",
  boxShadow: "4px 4px 20px 0px #0000003d",
  "&:disabled": {
    backgroundColor: "#DFDFDE",
    border: "1px solid #DFDFDE",
    color: "#8D8DAA",
    boxShadow: "none",
    fontWeight: "bold",
  },
});

export const DashboardBody = styled.div({
  backgroundColor: "#DFDFDE",
  padding: 6,
  height: 537,
  borderRadius: "0 0 10px 10px",
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    backgroundColor: "none",
    width: "100%",
  },
});

export const DashboardBodyWrapper = styled.div({
  padding: 2,
});

export const TodoItem = styled.div({
  backgroundColor: "#fff",
  boxShadow: "4px 4px 20px 0px #0000003d",
  padding: 4,
  fontSize: 14,
  display: "flex",
  borderRadius: 10,
  alignItems: "center",
  gap: 3,
  marginBottom: 5,
});

export const TodoIcon = styled.img({
  height: 17,
  width: 17,
});

export const NoDataIcon = styled.img({
  height: 75,
  width: 75,
});

export const IconButton = styled.button({
  border: "none",
  backgroundColor: "#fff",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "4px 4px 20px 0px #0000003d",
  },
  width: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 4,
  borderRadius: 10,
});

export const TodoTextWrapper = styled.div({
  flexGrow: 1,
  textAlign: "left",
  wordBreak: "break-word",
  padding: 2,
});

export const NoDataContainer = styled.div({
  margin: 0,
  display: "block",
  placeItems: "center",
  marginTop: 60,
});

export const NoDataTitle = styled.div({
  fontFamily: "Poppins",
  fontSize: 18,
  fontWeight: "bold",
});

export const CheckboxIcon = styled.img({
  width: 17,
  height: 17,
});
