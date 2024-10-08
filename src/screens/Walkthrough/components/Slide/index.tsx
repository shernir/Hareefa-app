import React from 'react';
import AppText from '../../../../components/AppText';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {themeSelector} from '../../../../redux/slices/theme/theme.selector';
import generateStyle from './style';
interface ComponentProps {
  title: string;
  description: string;
}
function Slide({title, description}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View style={styles.container}>
      <AppText variant="semiBold" style={styles.heading} size="heading">
        {title}
      </AppText>
      <AppText size="body" style={styles.text}>
        {description}
      </AppText>
    </View>
  );
}

export default Slide;
