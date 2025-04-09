import React, { memo } from 'react';
import './style.less';
import CoinName from '../CoinName';
import CoinBalance from '../CoinBalance';

interface IItemProps {
  [key: string]: any;
  currency: string;
  balance: string | number;
}

/**
 * Item Component discription
 */
const Item: React.FC<IItemProps> = (props: IItemProps) => {
  const {currency, balance} = props;
  return (
    <li className='wallet__item'>
      <CoinName currency={currency} />
      <CoinBalance currency={currency} balance={balance} />
    </li>
  );

};

export default memo(Item);
