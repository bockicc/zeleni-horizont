import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './routes/__root';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PlantDetailPage } from './pages/PlantDetailPage';

export function createAppRouter(): ReturnType<typeof createBrowserRouter> {
  return createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'katalog', element: <CatalogPage /> },
          { path: 'katalog/:plantId', element: <PlantDetailPage /> },
          { path: 'usluge', element: <ServicesPage /> },
          { path: 'kontakt', element: <ContactPage /> },
        ],
      },
    ],
    { basename: import.meta.env.BASE_URL },
  );
}
