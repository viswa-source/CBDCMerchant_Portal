import { configureStore } from "@reduxjs/toolkit";
import { dashbaordSlice } from "./DashboardSlice/Dashboardslice";
import { globalSlice } from "./GlobalSlice/GlobalSlice";
// ...

export const store = configureStore({
  reducer: {
    globalState:globalSlice.reducer,
    dashBoardState:dashbaordSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
