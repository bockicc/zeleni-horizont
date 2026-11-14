import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';

interface CartEmptyStateProps {
  readonly onClose: () => void;
}

export function CartEmptyState({ onClose }: CartEmptyStateProps): React.JSX.Element {
  const navigate = useNavigate();

  const handleContinue = (): void => {
    onClose();
    navigate('/katalog');
  };

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-forest">
        <ShoppingBag className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-forest-dark">Vaša korpa je prazna</h3>
      <p className="mt-2 max-w-xs text-sm text-muted">
        Istražite našu ponudu i dodajte biljke koje će ulepšati vaše dvorište.
      </p>
      <div className="mt-6">
        <Button variant="secondary" onClick={handleContinue}>
          Nastavite kupovinu
        </Button>
      </div>
    </div>
  );
}
