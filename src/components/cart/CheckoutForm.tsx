import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { CheckoutFormErrors, CheckoutFormValues } from '../../types';
import { hasErrors, validateCheckoutForm } from '../../utils/validation';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';

interface CheckoutFormProps {
  readonly onBack: () => void;
  readonly onSubmit: (values: CheckoutFormValues) => void;
}

const initialValues: CheckoutFormValues = {
  fullName: '',
  address: '',
  city: '',
  phone: '',
  note: '',
};

export function CheckoutForm({ onBack, onSubmit }: CheckoutFormProps): React.JSX.Element {
  const [values, setValues] = useState<CheckoutFormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutFormErrors>({});

  const updateField = (field: keyof CheckoutFormValues, value: string): void => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof CheckoutFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nextErrors = validateCheckoutForm(values);
    setErrors(nextErrors);
    if (!hasErrors(nextErrors)) {
      onSubmit(values);
      setValues(initialValues);
    }
  };

  const inputClass = (hasError: boolean): string =>
    `w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-forest/20 ${
      hasError ? 'border-terracotta-dark' : 'border-sage-200 focus:border-forest'
    }`;

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-sage-200 px-5 py-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-forest transition hover:text-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
        >
          <ArrowLeft className="h-4 w-4" />
          Nazad na korpu
        </button>
        <h3 className="mt-3 text-xl font-semibold text-forest-dark">Podaci za porudžbinu</h3>
        <p className="mt-1 text-sm text-muted">Popunite podatke za demo porudžbinu. Plaćanje se ne obrađuje.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex-1 space-y-4 overflow-y-auto px-5 py-5" noValidate>
        <FormField id="checkout-fullName" label="Ime i prezime" error={errors.fullName}>
          <input
            id="checkout-fullName"
            type="text"
            value={values.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'checkout-fullName-error' : undefined}
            className={inputClass(Boolean(errors.fullName))}
            autoComplete="name"
          />
        </FormField>
        <FormField id="checkout-address" label="Adresa" error={errors.address}>
          <input
            id="checkout-address"
            type="text"
            value={values.address}
            onChange={(event) => updateField('address', event.target.value)}
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? 'checkout-address-error' : undefined}
            className={inputClass(Boolean(errors.address))}
            autoComplete="street-address"
          />
        </FormField>
        <FormField id="checkout-city" label="Grad" error={errors.city}>
          <input
            id="checkout-city"
            type="text"
            value={values.city}
            onChange={(event) => updateField('city', event.target.value)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? 'checkout-city-error' : undefined}
            className={inputClass(Boolean(errors.city))}
            autoComplete="address-level2"
          />
        </FormField>
        <FormField id="checkout-phone" label="Telefon" error={errors.phone}>
          <input
            id="checkout-phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'checkout-phone-error' : undefined}
            className={inputClass(Boolean(errors.phone))}
            autoComplete="tel"
          />
        </FormField>
        <FormField id="checkout-note" label="Napomena (opciono)">
          <textarea
            id="checkout-note"
            value={values.note}
            onChange={(event) => updateField('note', event.target.value)}
            rows={3}
            className={inputClass(false)}
          />
        </FormField>
        <div className="pt-2">
          <Button type="submit" variant="secondary" fullWidth size="lg">
            Potvrdi porudžbinu
          </Button>
        </div>
      </form>
    </div>
  );
}
