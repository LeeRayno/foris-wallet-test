import { useStore } from '../stores/useStore';
import { add, multiply } from '../utils';

export default function useCurrency(currency = 'USDT') {
  const { currenciesMap } = useStore();
  return currenciesMap[currency] || {};
}

export const useCurrencyUSDBalance = (
  currency = 'USDT',
  balance: number | string
) => {
  const { ratesMap } = useStore();
  const { token_decimal } = useCurrency(currency);
  return multiply([ratesMap[currency], balance], token_decimal);
};

export const useTotalUSDBalance = () => {
  const { balances, ratesMap, currenciesMap } = useStore();
  const total: string[] = [];
  balances.forEach((item) => {
    const { currency, amount } = item;
    const rate = ratesMap[currency];
    if (rate) {
      total.push(multiply([rate, amount], currenciesMap[currency].token_decimal));
    }
  });
  return add(total);
}