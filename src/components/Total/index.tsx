import React, { memo } from 'react';
import { useTotalUSDBalance } from '../../hooks/useCurrency';
import { formatThousandsIntl } from '../../utils';
import './style.less';

interface ITotalProps {
  [key: string]: any;
}

/**
 * Total Component discription
 */
const Total: React.FC<ITotalProps> = () => {
  const total = useTotalUSDBalance();
  return (
    <div className='total'>
      $<span className='total__amount'>{formatThousandsIntl(total)}</span>USD
    </div>
  );
};

export default memo(Total);
