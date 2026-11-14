export interface ContactFormValues {
  name: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export interface CheckoutFormValues {
  fullName: string;
  address: string;
  city: string;
  phone: string;
  note: string;
}

export interface CheckoutFormErrors {
  fullName?: string;
  address?: string;
  city?: string;
  phone?: string;
}
