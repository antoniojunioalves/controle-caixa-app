export const formatCurrencyValue = (value) => {
  const currencyValue = value || 0

  return currencyValue.toLocaleString(
    'pt-BR',
    {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
}