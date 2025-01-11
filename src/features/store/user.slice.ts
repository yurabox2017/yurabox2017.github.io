import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { IUserProfile } from 'src/entities/interfaces/IUserProfile';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SignUpBody } from 'src/entities/types/signUp';
import { PREFIX } from 'src/services/api/API';

export const JWT_PERSISTENT_STATE = 'userData';

export interface IUserState {
  jwt: string | null;
  profile?: IUserProfile;
  status?: 'idle' | 'loading' | 'succeeded' | 'failed';
  errorState?: Error | null;
}

const initialState: IUserState = {
  jwt: loadState<IUserState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  profile: loadState<IUserState>(JWT_PERSISTENT_STATE)?.profile ?? null,
  status: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    login: (state, action: PayloadAction<IUserState>) => {
      state.jwt = action.payload.jwt;
      state.profile = action.payload.profile;
    },
    clearRegister: (state) => {
      state.status = 'idle';
      state.errorState = null;
    },
    logout: (state) => {
      state.jwt = null;
      state.profile = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.status = 'succeeded';
        state.jwt = action.payload.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.jwt = null;
        state.errorState = action.error as Error;
      });
  },
});

export const registerThunk = createAsyncThunk('user/register', async (params: SignUpBody) => {
  const response = await fetch(`${PREFIX}/signup`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    let errBody = await response.json();
    return Promise.reject(errBody.errors[0]);
  }
  return await response.json();
});

export default userSlice.reducer;
export const { addJwt, login, logout, clearRegister } = userSlice.actions;
