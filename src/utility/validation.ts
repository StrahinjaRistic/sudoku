export const updateObject = (oldObject: any, updatedValues: any) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};
export const checkValidity = (value: any, rules: any) => {
  let isValid = true;
  let errMessage = '';

  if (rules.validation) {
    if (rules.validation.required) {
      isValid = value.trim() !== '' && isValid;
      if (!isValid) {
        errMessage = 'This field is required!';
      }
    }
    if (rules.validation.minLength) {
      isValid = value.length >= rules.validation.minLength && isValid;
      if (!isValid) {
        errMessage = 'This field has to be longer than 6 characters!';
      }
    }

    if (rules.validation.maxLength) {
      isValid = value.length <= rules.validation.maxLength && isValid;
      if (!isValid && value.length >= rules.validation.maxLength) {
        errMessage = 'This field has to be less than 15 characters!';
      }
    }
    if (rules.validation.isMail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      if (!isValid) {
        errMessage = 'Bad email adress!';
      }
      if (!value) {
        errMessage = 'This field is required!';
      }
    }
    if (rules.validation.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      if (!isValid) {
        errMessage = 'This field only accepts numbers!';
      }
    }
    if (rules.validation.match) {
      isValid = rules.validation.match && isValid;
    }
    if (rules.validation.match === false) {
      isValid = rules.validation.match && isValid;
      errMessage = 'Password dont match!';
    }
  }
  return { isValid, errMessage };
};

export const updateFormHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  formName: string,
  form: any
) => {
  let inputValid = checkValidity(event.target.value, form[formName]);
  const updatedFormElement = updateObject(form[formName], {
    value: event.target.value,
    valid: inputValid.isValid,
    message: inputValid.errMessage,
  });
  const updatedForm = updateObject(form, {
    [formName]: updatedFormElement,
  });

  let formIsValid = true;

  for (let formName in updatedForm) {
    formIsValid = updatedForm[formName].valid && formIsValid;
  }

  return { updatedForm, formIsValid };
};

export const inputTouchHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
  formName: string,
  form: any
) => {
  let inputValid = checkValidity(event.target.value, form[formName]);
  const touchedUpdateProp = updateObject(form[formName], {
    touched: true,
    valid: inputValid.isValid,
    message: inputValid.errMessage,
  });
  const touchedUpdateRegForm = updateObject(form, {
    [formName]: touchedUpdateProp,
  });
  return touchedUpdateRegForm;
};

export const checkPassword = (form: any) => {
  let validationPass;
  let checkPassElement;
  let newForm;
  const confirm: string = 'confirmPassword';
  const validation: any = 'validation';
  let formIsValid = false;
  if (form.password.value !== form.confirmPassword.value) {
    validationPass = updateObject([confirm][validation], {
      match: false,
    });
    checkPassElement = updateObject(form[confirm], {
      [validation]: validationPass,
    });
    newForm = updateObject(form, {
      [confirm]: checkPassElement,
    });
  } else if (form.password.value === form.confirmPassword.value) {
    validationPass = updateObject([confirm][validation], {
      match: true,
    });
    checkPassElement = updateObject(form[confirm], {
      [validation]: validationPass,
      message: '',
      valid: true,
    });
    newForm = updateObject(form, {
      [confirm]: checkPassElement,
    });
    if (
      form.password.value.length >= 6 &&
      form.confirmPassword.value.length >= 6
    ) {
      formIsValid = true;
    } else {
      formIsValid = false;
    }
  }
  return { newForm, formIsValid };
};
