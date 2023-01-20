import {
  DashboardBody,
  DashboardBodyWrapper,
} from "../../assets/styledComponents/Main";
import NoDataFound from "../NoDataFound";
import Todo from "../Todo";
import { useSelector } from "react-redux";
export default function Body({ search, isEdit, setIsEdit, setCurrTodo }) {
  const { todos, isFetching } = useSelector((state) => state.todo);
  return (
    <DashboardBodyWrapper>
      <DashboardBody>
        {isFetching ? (
          <>fetching ...</>
        ) : (
          <>
            {!todos.length ? (
              <NoDataFound />
            ) : (
              <>
                {todos
                  .filter((todo) =>
                    todo.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((v, i) => (
                    <Todo
                      key={i}
                      {...v}
                      setIsEdit={setIsEdit}
                      isEdit={isEdit}
                      setCurrTodo={setCurrTodo}
                    />
                  ))}
              </>
            )}
          </>
        )}
      </DashboardBody>
    </DashboardBodyWrapper>
  );
}
