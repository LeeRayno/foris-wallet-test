import React, { memo } from 'react';
import './style.less';
import { useCurrencyUSDBalance } from '../../hooks/useCurrency';
import { formatThousandsIntl } from '../../utils';

interface ICoinBalanceProps {
  balance: string | number;
  currency: string;
}

/**
 * CoinBalance Component discription
 */
const CoinBalance: React.FC<ICoinBalanceProps> = (props: ICoinBalanceProps) => {
  const { balance, currency } = props;
  const usdBalance = useCurrencyUSDBalance(currency, balance);

  return (
    <div className='wallet__balance'>
      <div className='wallet__balance--assets'>
        <span className='wallet__balance--amount'>{balance}</span>
        <span className='wallet__balance--currency'>{currency}</span>
      </div>
      <span className='wallet__balance--value'>
        $ {formatThousandsIntl(usdBalance)}
      </span>
    </div>
  );
};

export default memo(CoinBalance);
