import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

// Load user from localStorage
const userIdFromStorage = localStorage.getItem("userId")
  ? JSON.parse(localStorage.getItem("userId"))
  : null;

// Async Thunks
export const loginUser = createAsyncThunk("auth/loginUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post("/auth/login", formData);
    localStorage.setItem("userId", JSON.stringify(response.data.userId));
    return response.data.userId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Login failed");
  }
});

export const signupUser = createAsyncThunk("auth/signupUser", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post("/auth/register", formData);
    localStorage.setItem("userId", JSON.stringify(response.data.userId));
    return response.data.userId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Signup failed");
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValue }) => {
  try {
    await axios.get("/auth/logout");
    localStorage.removeItem("userId");
    return null;
  } catch (err) {
    return rejectWithValue("Logout failed");
  }
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: userIdFromStorage,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.userId = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
