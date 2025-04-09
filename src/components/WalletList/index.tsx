import React, { memo } from 'react';
import './style.less';
import Item from '../Item';
import { useStore } from '../../stores/useStore';

interface IListProps {
  [key: string]: any;
}

/**
 * WalletList Component discription
 */
const WalletList: React.FC<IListProps> = () => {
  const { balances } = useStore();
  return (
    <ul className='list'>
      {balances.map((item) => (
        <Item
          key={item.currency}
          currency={item.currency}
          balance={item.amount}
        />
      ))}
    </ul>
  );
};

export default memo(WalletList);
