import React from 'react';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import {View} from 'react-native';
interface ComponentProps {
  type: 'horizontal' | 'vertical';
}
function Seprator({type = 'horizontal'}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View
      style={
        type == 'horizontal'
          ? styles.sepratorHorizontal
          : styles.sepratorVertical
      }
    />
  );
}

export default Seprator;
