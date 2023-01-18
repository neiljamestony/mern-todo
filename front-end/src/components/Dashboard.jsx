import { useState, useEffect } from "react";
import {
  DashboardContainer,
  DashboardHeader,
  AddTodoInput,
  AddTodoButton,
  DashboardBody,
  DashboardBodyWrapper,
} from "../assets/styledComponents/Main";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../app/reducer/auth/authSlice";
import NoDataFound from "./NoDataFound";

export default function Dashboard() {
  const [isSearch, setIsSearch] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <DashboardContainer>
      {isSearch ? (
        <DashboardHeader>
          <AddTodoInput type="text" placeholder="Search Todo" />
          <AddTodoButton type="button">Search</AddTodoButton>
          <AddTodoButton type="button" onClick={() => setIsSearch(false)}>
            Add Todo
          </AddTodoButton>
        </DashboardHeader>
      ) : (
        <DashboardHeader>
          <AddTodoInput type="text" placeholder="Todo" />
          <AddTodoButton type="button">Save</AddTodoButton>
          <AddTodoButton type="button" onClick={() => setIsSearch(true)}>
            Search Todo
          </AddTodoButton>
          <AddTodoButton type="button" onClick={() => dispatch(logout())}>
            Logout
          </AddTodoButton>
        </DashboardHeader>
      )}
      <DashboardBodyWrapper>
        <DashboardBody>
          {/* <Todo /> */}
          <NoDataFound />
        </DashboardBody>
      </DashboardBodyWrapper>
    </DashboardContainer>
  );
}
