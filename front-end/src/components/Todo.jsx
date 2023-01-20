import { useEffect, useState } from "react";
import {
  TodoItem,
  TodoIcon,
  IconButton,
  TodoTextWrapper,
  CheckboxIcon,
} from "../assets/styledComponents/Main";
import DeleteIcon from "../assets/img/delete.png";
import Edit from "../assets/img/editing.png";
import Square from "../assets/img/square.png";
import Select from "../assets/img/select.png";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodoItem,
  removeTodoItem,
  reset,
  getTodoList,
} from "../app/reducer/todo/todoSlice";
import { toast } from "react-toastify";

export default function Todo({
  _id,
  title,
  user,
  isCompleted,
  setIsEdit,
  setCurrTodo,
}) {
  const [isDone, setIsDone] = useState(isCompleted);
  const { isRemoving, isSuccess } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const onEdit = () => {
    setCurrTodo({
      title: title,
      _id: _id,
      user: user,
    });
    setIsEdit(true);
  };

  useEffect(() => {
    dispatch(
      completeTodoItem({
        isCompleted: isDone,
        _id: _id,
        user: user,
      })
    );
  }, [isDone]);

  const onRemove = async () => {
    await dispatch(removeTodoItem(_id));
    if (isSuccess) {
      toast.success("Todo removed successfully!");
      dispatch(getTodoList(user));
      dispatch(reset());
    }
  };

  return (
    <TodoItem>
      <TodoTextWrapper
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {title}
      </TodoTextWrapper>
      <IconButton type="button" onClick={() => setIsDone(!isDone)}>
        <CheckboxIcon src={isDone ? Select : Square} />
      </IconButton>
      <IconButton type="button" onClick={() => onEdit()} disabled={isDone}>
        <TodoIcon src={Edit} />
      </IconButton>
      <IconButton type="button" disabled={isRemoving} onClick={onRemove}>
        <TodoIcon src={DeleteIcon} />
      </IconButton>
    </TodoItem>
  );
}
