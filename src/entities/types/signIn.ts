import { Profile } from './profile';

export type SignInBody = {
  email: string;
  password: string;
};

export type AuthLoginResult = {
  token: string;
  profile: Profile;
};
