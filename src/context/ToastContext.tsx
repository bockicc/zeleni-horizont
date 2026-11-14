import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ToastItem } from '../types';

interface ToastContextValue {
  readonly toasts: readonly ToastItem[];
  readonly showToast: (message: string) => void;
  readonly removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [toasts, setToasts] = useState<readonly ToastItem[]>([]);

  const removeToast = useCallback((id: string): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string): void => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setToasts((prev) => [...prev, { id, message }]);
      window.setTimeout(() => removeToast(id), 2600);
    },
    [removeToast],
  );

  const value = useMemo<ToastContextValue>(
    () => ({ toasts, showToast, removeToast }),
    [toasts, showToast, removeToast],
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast mora biti korišćen unutar ToastProvider komponente.');
  }
  return context;
}
