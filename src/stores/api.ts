export interface Currency {
  [key: string]: any;
}

export interface Balance {
  currency: string;
  amount: number;
}

export interface RateItem {
  amount: string;
  rate: string;
}

export interface Rate {
  from_currency: string;
  to_currency: string;
  time_stamp: number;
  rates: any;
}

// 封装fetch请求
const fetchMockData = async <T>(filename: string): Promise<T> => {
  const response = await fetch(`/mocks/${filename}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};

// 各数据接口
export const fetchCurrencies = () =>
  fetchMockData<Currency[]>('currencies.json');
export const fetchRates = () => fetchMockData<Rate[]>('rates.json');
export const fetchBalances = () => fetchMockData<Balance[]>('balances.json');
