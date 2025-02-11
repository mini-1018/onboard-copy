export type Signin = {
  email: string;
  password: string;
};

export type SignUp = {
  email: string;
  name: string;
  password: string;
  image: File;
};

export type UpdateUser = {
  userId: string;
  name?: string;
  image?: File;
};

export type DeleteUser = {
  userId: string;
};
