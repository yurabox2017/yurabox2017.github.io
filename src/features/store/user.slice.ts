import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import { IUserProfile } from 'src/entities/interfaces/IUserProfile';

export const JWT_PERSISTENT_STATE = 'userData';

export interface IUserState {
  jwt: string | null;
  profile?: IUserProfile;
}

const initialState: IUserState = {
  jwt: loadState<IUserState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    addProfile: (state, action: PayloadAction<IUserProfile>) => {
      state.profile = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
      state.profile = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
