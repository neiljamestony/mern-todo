import { useEffect } from "react";
import { DashboardContainer } from "../assets/styledComponents/Main";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TodoComponent from "./TodoComponent/Index";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <DashboardContainer>
      <TodoComponent />
    </DashboardContainer>
  );
}
