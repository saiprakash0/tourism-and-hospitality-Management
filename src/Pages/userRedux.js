import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../axiosRequest";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isError = true;
        state.currentUser = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isError = true;
        state.currentUser = null;
        state.isLoading = false;
      });
  },
});

export const loginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    console.log("poochi", user)
    try {
      const response = await publicRequest.post("/api/user/login", user);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const res = await publicRequest.post("/api/user/register", user);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signOut = createAsyncThunk("user/signOut", async (thunkAPI) => {
  try {
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export default userSlice.reducer;