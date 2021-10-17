interface IField {
  type: string;
  placeholder: string;
  value: string;
  valid: boolean;
  touched: boolean;
  message: string;
  validation: {
    [item: string]: boolean | number;
  };
};

export type LoginTypes = {
  userName: IField;
  password: IField;
};

export type RegistrationTypes = {
  userName: IField;
  password: IField;
  email: IField;
};
