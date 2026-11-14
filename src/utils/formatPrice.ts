export function formatPrice(value: number): string {
  const formatted = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 0,
  }).format(value);
  return `${formatted} RSD`;
}
