import React, { useState } from 'react';
import type { ContactFormErrors, ContactFormValues } from '../../types';
import { hasErrors, validateContactForm } from '../../utils/validation';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';

const initialValues: ContactFormValues = {
  name: '',
  phone: '',
  message: '',
};

export function ContactForm(): React.JSX.Element {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const updateField = (field: keyof ContactFormValues, value: string): void => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (!hasErrors(nextErrors)) {
      setSubmitted(true);
      setValues(initialValues);
    }
  };

  const inputClass = (hasError: boolean): string =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/20 ${
      hasError ? 'border-terracotta-dark' : 'border-sage-200 focus:border-forest'
    }`;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-8 text-center">
        <h3 className="text-2xl font-semibold text-forest-dark">Hvala vam!</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Vaša poruka je poslata. Javićemo vam se u najkraćem roku.
        </p>
        <div className="mt-6 flex justify-center">
          <Button variant="secondary" onClick={() => setSubmitted(false)}>
            Pošalji novu poruku
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl border border-sage-200 bg-white p-6 shadow-soft md:p-8">
      <FormField id="contact-name" label="Ime" error={errors.name}>
        <input
          id="contact-name"
          type="text"
          value={values.name}
          onChange={(event) => updateField('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={inputClass(Boolean(errors.name))}
          autoComplete="name"
        />
      </FormField>
      <FormField id="contact-phone" label="Telefon" error={errors.phone}>
        <input
          id="contact-phone"
          type="tel"
          value={values.phone}
          onChange={(event) => updateField('phone', event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
          className={inputClass(Boolean(errors.phone))}
          autoComplete="tel"
        />
      </FormField>
      <FormField id="contact-message" label="Poruka" error={errors.message}>
        <textarea
          id="contact-message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={inputClass(Boolean(errors.message))}
        />
      </FormField>
      <div className="pt-2">
        <Button type="submit" variant="secondary" fullWidth size="lg">
          Pošalji poruku
        </Button>
      </div>
    </form>
  );
}
