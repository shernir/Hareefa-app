import {AppText} from 'components';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import Bell from '../../../../../assets/imgs/bell.svg';
import Input from 'components/Input';
import Animated from 'react-native-reanimated';
interface ComponentProps {
  headerStyle: ViewStyle;
  inputWrapper: ViewStyle;
}
function Header({headerStyle, inputWrapper}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <Animated.View style={[styles.wrapper, headerStyle]}>
      <View style={[styles.container]}>
        <View>
          <AppText size="body" variant="medium">
            Happy Sunday Sherif!
          </AppText>
          <AppText style={styles.caption} size="caption" variant="normal">
            18 July: ☀️ 85° all day
          </AppText>
        </View>
        <Bell />
      </View>
      <Animated.View style={[styles.inputContainer, inputWrapper]}>
        <Input />
      </Animated.View>
    </Animated.View>
  );
}

export default Header;
