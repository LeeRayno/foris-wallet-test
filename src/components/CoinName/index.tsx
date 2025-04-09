import React, { memo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.less';
import useCurrency from '../../hooks/useCurrency';

interface ICoinNameProps {
  currency: string;
}

/**
 * CoinName Component discription
 */
const CoinName: React.FC<ICoinNameProps> = (props: ICoinNameProps) => {
  const { currency } = props;
  const { colorful_image_url, name } = useCurrency(currency);
  const [hasError, setHasError] = useState(false);

  return (
    <div className='coin'>
      <LazyLoadImage
        alt='image'
        src={hasError ? 'https://crypto.com/exchange/favicon.png' : colorful_image_url}
        effect='blur' // 可选效果：blur/opacity/black-and-white
        placeholderSrc={'https://crypto.com/exchange/favicon.png'}
        wrapperClassName='coin__icon'
        onError={() => setHasError(true)}
      />
      <span className="coin__name">{name}</span>
    </div>
  );
};

export default memo(CoinName);
