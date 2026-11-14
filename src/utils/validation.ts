import type {
  CheckoutFormErrors,
  CheckoutFormValues,
  ContactFormErrors,
  ContactFormValues,
} from '../types';

const phonePattern = /^(\+381|0)[0-9\s\-\/]{7,12}$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) {
    errors.name = 'Ime je obavezno.';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Telefon je obavezan.';
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Unesite ispravan broj telefona.';
  }
  if (!values.message.trim()) {
    errors.message = 'Poruka je obavezna.';
  }
  return errors;
}

export function validateCheckoutForm(values: CheckoutFormValues): CheckoutFormErrors {
  const errors: CheckoutFormErrors = {};
  if (!values.fullName.trim()) {
    errors.fullName = 'Ime i prezime su obavezni.';
  }
  if (!values.address.trim()) {
    errors.address = 'Adresa je obavezna.';
  }
  if (!values.city.trim()) {
    errors.city = 'Grad je obavezan.';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Telefon je obavezan.';
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Unesite ispravan broj telefona.';
  }
  return errors;
}

export function hasErrors(errors: ContactFormErrors | CheckoutFormErrors): boolean {
  return Object.values(errors).some((value) => typeof value === 'string' && value.length > 0);
}
