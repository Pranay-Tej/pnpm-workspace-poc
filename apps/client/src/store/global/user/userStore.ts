import { createSlice } from "@reduxjs/toolkit";

const initialState: { plan: "free" | "paid" } = {
  plan: "free",
};

const USER_REDUX_KEY = "user";

export const userSlice = createSlice({
  name: USER_REDUX_KEY,
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
