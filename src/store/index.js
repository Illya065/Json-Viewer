import { configureStore } from "@reduxjs/toolkit";
import { reducer as jsonView } from "./modules/jsonView/slice";
export const store = configureStore({
  reducer: {
    jsonView,
  },
});
