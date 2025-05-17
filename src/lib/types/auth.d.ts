declare type ApplicationUser = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
} & DatabaseProperties;

declare type LoginResponse = {
  token: string;
  user: ApplicationUser;
};
