import React from 'react';
import AppText from '../AppText';
import {TouchableHighlight, View} from 'react-native';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from '../../redux/slices/theme/theme.selector';
interface ComponentProps {
  type?: 'primary' | 'outline' | 'tertiary';
  title: string;
  icon?: React.ReactNode;
  onPress: () => void;
}
function Button({type = 'primary', icon, onPress, title}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        styles.container,
        type === 'primary' ? styles.primary : styles.outline,
      ]}>
      <View style={styles.titleContainer}>
        {icon}
        <AppText
          style={type === 'primary' ? styles.textPrimary : styles.textOutline}>
          {title}
        </AppText>
      </View>
    </TouchableHighlight>
  );
}

export default Button;
