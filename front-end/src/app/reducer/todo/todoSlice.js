import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  isFetching: false,
  isRemoving: false,
  message: "",
  todos: [],
};

export const getTodoList = createAsyncThunk(
  "auth/list",
  async (uid, thunkAPI) => {
    try {
      return await todoService.getTodos(uid);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const setTodoItem = createAsyncThunk(
  "auth/create",
  async (formData, thunkAPI) => {
    try {
      return await todoService.setTodo(formData);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update todo

export const editTodoItem = createAsyncThunk(
  "auth/edit",
  async (formData, thunkAPI) => {
    try {
      return await todoService.updateTodo(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//complete todo
export const completeTodoItem = createAsyncThunk(
  "auth/isComplete",
  async (formData, thunkAPI) => {
    try {
      return await todoService.completeTodo(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// remove todo

export const removeTodoItem = createAsyncThunk(
  "auth/remove",
  async (id, thunkAPI) => {
    try {
      return await todoService.removeTodo(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.isFetching = false;
      state.isRemoving = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoList.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getTodoList.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(getTodoList.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(setTodoItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setTodoItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = [...state.todos, action.payload.data];
      })
      .addCase(setTodoItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.msg;
      })
      .addCase(editTodoItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTodoItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(editTodoItem.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.todos = state.todos;
        state.message = action.payload;
      })
      .addCase(completeTodoItem.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(completeTodoItem.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.todos = action.payload;
      })
      .addCase(completeTodoItem.rejected, (state, action) => {
        state.isError = true;
        state.todos = state.todos;
        state.message = action.payload;
      })
      .addCase(removeTodoItem.pending, (state) => {
        state.isRemoving = true;
      })
      .addCase(removeTodoItem.fulfilled, (state) => {
        state.isRemoving = false;
        state.isSuccess = true;
      })
      .addCase(removeTodoItem.rejected, (state, action) => {
        state.isError = true;
        state.isRemoving = false;
        state.todos = action.payload;
      });
  },
});

export const { reset } = todoSlice.actions;

export default todoSlice.reducer;
