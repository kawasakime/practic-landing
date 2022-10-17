import React from 'react';

import * as S from './styles'
import * as C from '../../styles/components'
import Navigation from '../Navigation';

const BurgerPanel = () => {
  return (
    <S.BurgerPanel>
      <Navigation direction='column' margin='0' marginBottom='30px'/>
    </S.BurgerPanel>
  );
};

export default BurgerPanel;