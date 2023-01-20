import { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../../app/reducer/todo/todoSlice";
import { toast } from "react-toastify";

const TodoComponent = () => {
  const { user } = useSelector((state) => state.auth);
  const { isError, message } = useSelector((state) => state.todo);
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currTodo, setCurrTodo] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) toast.error(message);
  }, [isError]);

  useEffect(() => {
    dispatch(getTodoList(user && user?._id));
  }, []);

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        currTodo={currTodo}
        setCurrTodo={setCurrTodo}
      />
      <Body
        search={search}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setCurrTodo={setCurrTodo}
      />
    </div>
  );
};

export default TodoComponent;
