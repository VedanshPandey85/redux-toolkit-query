import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  alltasks: [],
  filter: "all",
  search: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.alltasks.push(action.payload);
      },

      prepare: (title) => {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    deleteTask: (state, action) => {
      state.alltasks = state.alltasks.filter(
        (task) => task.id !== action.payload,
      );
    },
    toggleTask: (state, action) => {
      const task = state.alltasks.find((task) => task.id === action.payload);
      task.completed = !task.completed;
    },
    filterTask: (state, action) => {
      state.filter = action.payload;
    },
    searchTask: (state, action) => {
      state.search = action.payload;
      // state.alltasks = state.alltasks.filter((task) =>
      //   task.title.toLowerCase().includes(action.payload.toLowerCase()),
      // );
    },
  },
});

export const { addTask, deleteTask, toggleTask, filterTask, searchTask } =
  taskSlice.actions;
export default taskSlice.reducer;
