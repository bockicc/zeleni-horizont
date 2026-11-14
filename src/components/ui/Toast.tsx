import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import type { ToastItem } from '../../types';

interface ToastViewportProps {
  readonly toasts: readonly ToastItem[];
  readonly onDismiss: (id: string) => void;
}

export function ToastViewport({ toasts, onDismiss }: ToastViewportProps): React.JSX.Element {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[80] flex w-[min(92vw,24rem)] flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-sage-200 bg-white/95 p-4 shadow-card backdrop-blur motion-safe:animate-fade-in"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-forest" aria-hidden="true" />
          <p className="flex-1 text-sm text-charcoal">{toast.message}</p>
          <button
            type="button"
            onClick={() => onDismiss(toast.id)}
            aria-label="Zatvori obaveštenje"
            className="rounded-full p-1 text-muted transition hover:bg-sage-100 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
