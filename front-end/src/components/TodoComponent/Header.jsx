import { useState } from "react";
import {
  DashboardHeader,
  AddTodoInput,
  AddTodoButton,
} from "../../assets/styledComponents/Main";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/reducer/auth/authSlice";
import {
  setTodoItem,
  reset,
  editTodoItem,
} from "../../app/reducer/todo/todoSlice";
import { toast } from "react-toastify";

export default function Header({
  setSearch,
  isEdit,
  setIsEdit,
  currTodo,
  setCurrTodo,
}) {
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const { isLoading, isSuccess } = useSelector((state) => state.todo);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      setTodoItem({ todo: todo, uid: user._id, isCompleted: false })
    );
    if (isSuccess) {
      setTodo("");
      toast.success("Todo added successfully!");
      dispatch(reset());
    }
  };

  const onSubmitEdit = async (e) => {
    e.preventDefault();
    await dispatch(editTodoItem(currTodo));
    if (isSuccess) {
      setTodo("");
      setCurrTodo("");
      setIsEdit(false);
      dispatch(reset());
    }
  };

  const onCancel = () => {
    setIsEdit(false);
    setCurrTodo("");
  };

  return (
    <div>
      {isSearch ? (
        <DashboardHeader>
          <AddTodoInput
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Todo"
          />
          <AddTodoButton type="button" onClick={() => setIsSearch(false)}>
            Add Todo
          </AddTodoButton>
        </DashboardHeader>
      ) : (
        <>
          {isEdit ? (
            <form onSubmit={onSubmitEdit}>
              <DashboardHeader>
                <AddTodoInput
                  type="text"
                  value={currTodo?.title}
                  onChange={(e) =>
                    setCurrTodo({ ...currTodo, title: e.target.value })
                  }
                  placeholder="Edit Todo"
                  required
                />
                <AddTodoButton type="submit" disabled={isLoading}>
                  {isLoading ? "loading ..." : "Submit"}
                </AddTodoButton>
                <AddTodoButton type="button" onClick={() => onCancel()}>
                  Cancel
                </AddTodoButton>
              </DashboardHeader>
            </form>
          ) : (
            <form onSubmit={onSubmit}>
              <DashboardHeader>
                <AddTodoInput
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="Todo"
                />
                <AddTodoButton type="submit" disabled={isLoading}>
                  {isLoading ? "loading" : "Save"}
                </AddTodoButton>
                <AddTodoButton type="button" onClick={() => setIsSearch(true)}>
                  Search Todo
                </AddTodoButton>
                <AddTodoButton type="button" onClick={() => dispatch(logout())}>
                  Logout
                </AddTodoButton>
              </DashboardHeader>
            </form>
          )}
        </>
      )}
    </div>
  );
}
