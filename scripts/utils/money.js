// Convierte un precio en centavos a un formato de dólares con dos decimales.
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}