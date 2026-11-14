import React from 'react';

interface FormFieldProps {
  readonly id: string;
  readonly label: string;
  readonly error?: string;
  readonly children: React.ReactNode;
}

export function FormField({ id, label, error, children }: FormFieldProps): React.JSX.Element {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-terracotta-dark">
          {error}
        </p>
      ) : null}
    </div>
  );
}
