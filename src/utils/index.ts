export const formatCurrencyValue = (value: number | string | null | undefined): string => {
  const currencyValue = Number(value) || 0;

  return currencyValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
};

export const setOverflow = (overflow: 'visible' | 'hidden'): void => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  if (html) {
    html.style.overflow = overflow;
  }

  if (body) {
    body.style.overflow = overflow;
  }
};
