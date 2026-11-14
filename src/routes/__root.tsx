import React, { useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { ToastViewport } from '../components/ui/Toast';
import { useToast } from '../context/ToastContext';

export function RootLayout(): React.JSX.Element {
  const { toasts, removeToast } = useToast();
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-background text-charcoal">
      <ScrollRestoration />
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ToastViewport toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
