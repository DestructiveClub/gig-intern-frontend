import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"; // Import your userSlice reducer

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // Add other reducers if you have them
  },
});

export default store;
