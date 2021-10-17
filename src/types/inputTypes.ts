export type LoginTypes = {
  userName: {
    type: string;
    placeholder: string;
    value: string;
    valid: boolean;
    touched: boolean;
    message: string;
    validation: {
      required: boolean;
    };
  };
  password: {
    type: string;
    placeholder: string;
    value: string;
    valid: boolean;
    touched: boolean;
    message: string;
    validation: {
      required: boolean;
      minLength: number;
      maxLength: number;
    };
  };
};

export type RegistrationTypes = {
  userName: {
    type: string;
    placeholder: string;
    value: string;
    valid: boolean;
    touched: boolean;
    message: string;
    validation: {
      required: boolean;
    };
  };
  password: {
    type: string;
    placeholder: string;
    value: string;
    valid: boolean;
    touched: boolean;
    message: string;
    validation: {
      required: boolean;
      minLength: number;
      maxLength: number;
    };
  };
  email: {
    type: string;
    placeholder: string;
    value: string;
    valid: boolean;
    touched: boolean;
    message: string;
    validation: {
      required: boolean;
      isMail: boolean;
    };
  };
};
