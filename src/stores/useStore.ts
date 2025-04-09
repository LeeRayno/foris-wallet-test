import { create } from 'zustand';

import { Currency, Rate, Balance } from './api';
import rates from '../mocks/rates.json';
import currencies from '../mocks/currencies.json';
import balances from '../mocks/balances.json';

// Mock data
const _rates = rates.tiers;
const _currencies = currencies.currencies;
const _balances = balances.wallet;

const getCurrenciesMap = (currencies: Currency[]) => {
  const map: Record<string, Currency> = {};
  currencies.forEach((currency) => {
    map[currency.code] = currency;
  });
  return map;
};

const getRatesMap = (rates: Rate[]) => {
  const map: Record<string, string | number> = {};
  rates.forEach((rate: Rate) => {
    map[rate.from_currency] = rate.rates[0].rate;
  });
  return map;
};

interface StoreState {
  currencies: Currency[];
  rates: Rate[];
  balances: Balance[];
  currenciesMap: Record<string, Currency>;
  ratesMap: Record<string, string | number>;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  currencies: [],
  rates: [],
  balances: [],
  currenciesMap: {},
  ratesMap: {},
  loading: false,
  error: null,

  // mock fetch data
  fetchData: async () => {
    set({
      currencies: _currencies,
      currenciesMap: getCurrenciesMap(_currencies),
      rates: _rates,
      ratesMap: getRatesMap(_rates),
      balances: _balances,
      loading: false,
    });
  },
}));
