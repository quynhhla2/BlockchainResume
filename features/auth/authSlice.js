import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/signin",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  loginCode: 0,
  registerCode: 0,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetCodes: (state) => {
      state.loginCode = 0;
      state.registerCode = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        state.registerCode = 1;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action?.error;
        state.registerCode = 2;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("user", action.payload.user.name);
          localStorage.setItem("userId", action.payload.user._id);
          state.loginCode = 1;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action?.error;
        state.loginCode = 2;
      });
  },
});

export const { resetCodes } = authSlice.actions;

export default authSlice.reducer;
