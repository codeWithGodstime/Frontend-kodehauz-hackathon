const CURRENCY_SUBUNIT = 100;

export function formatPlanAmount(amountKobo: number, currency: string): string {
  if (amountKobo === 0) return 'Free';
  const major = amountKobo / CURRENCY_SUBUNIT;
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
    }).format(major);
  } catch {
    return `${major.toFixed(2)} ${currency}`;
  }
}

export function planCadenceLabel(interval: string): string {
  if (interval === 'monthly') return 'month';
  return interval;
}
