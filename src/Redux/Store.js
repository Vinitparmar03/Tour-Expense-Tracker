import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./Reducer/DataReducer";

export const store = configureStore({
  reducer: {
    [dataReducer.name]: dataReducer.reducer,
  },
});
