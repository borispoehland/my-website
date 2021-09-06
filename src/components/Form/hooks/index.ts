import { useEffect } from 'react';

export const useFormError = (id: string, errorMessage: string | undefined) => {
  useEffect(() => {
    const $error = $(`label[for="${id}"] ~ .form-element__error`);
    const $input = $(`label[for="${id}"] ~ .form-element__input`);
    if (errorMessage) {
      $error.css('opacity', 1);
      $input.addClass('--has-error');
    } else {
      $error.css('opacity', 0);
      $input.removeClass('--has-error');
    }
  }, [errorMessage, id]);
};
