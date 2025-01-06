import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { IUserProfile } from 'src/entities/interfaces/IUserProfile';
import type { PayloadAction } from '@reduxjs/toolkit';

export const JWT_PERSISTENT_STATE = 'userData';

export interface IUserState {
  jwt: string | null;
  profile?: IUserProfile;
}

const initialState: IUserState = {
  jwt: loadState<IUserState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  profile: loadState<IUserState>(JWT_PERSISTENT_STATE)?.profile ?? null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    addProfile: (state, action: PayloadAction<IUserState>) => {
      state.jwt = action.payload.jwt;
      state.profile = action.payload.profile;
    },
    logout: (state) => {
      state.jwt = null;
      state.profile = null;
    },
  },
});

export default userSlice.reducer;
export const { addJwt, addProfile, logout } = userSlice.actions;
