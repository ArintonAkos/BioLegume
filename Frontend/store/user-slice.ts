import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from './store'

export interface UserState {
  email: string,
  loggedIn: boolean,
  token: string,
  refreshToken: string,
  status: 'loading' | ''
}

const initialState: UserState = {
  email: '',
  loggedIn: false,
  refreshToken: '',
  status: '',
  token: ''
};

interface LoginProps {
  email: string,
  password: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginProps>) => {
      state.email = action.payload.email;
    }
  }
});

export const { login } = userSlice.actions

export default userSlice.reducer