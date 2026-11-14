import React, { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CatalogProvider } from './context/CatalogContext';
import { ToastProvider } from './context/ToastContext';
import { createAppRouter } from './router';

function AppRoutes(): React.JSX.Element {
  const router = useMemo(() => createAppRouter(), []);
  return <RouterProvider router={router} />;
}

export default function App(): React.JSX.Element {
  return (
    <ToastProvider>
      <CatalogProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </CatalogProvider>
    </ToastProvider>
  );
}
