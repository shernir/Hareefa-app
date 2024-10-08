import React from 'react';
import {View} from 'react-native';
import LogoImg from '../../assets/imgs/logo.svg';
import AppText from '../AppText';
import generateStyle from './style';
import {useSelector} from 'react-redux';
import {themeSelector} from '../../redux/slices/theme/theme.selector';
function Logo() {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View style={styles.container}>
      <LogoImg width={30} height={30} />
      <AppText style={styles.text} size="subheading" variant="semiBold">
        Hareefa
      </AppText>
    </View>
  );
}

export default Logo;
