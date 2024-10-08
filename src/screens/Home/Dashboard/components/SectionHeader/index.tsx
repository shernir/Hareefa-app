import {AppText} from 'components';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {themeSelector} from 'redux/slices/theme/theme.selector';
interface ComponentProps {
  title: string;
  tailText: string;
  navigate?: () => void;
}
function SectionHeader({title, tailText, navigate}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  return (
    <View style={styles.header}>
      <AppText size="subheading" variant="medium">
        {title}
      </AppText>
      <TouchableOpacity onPress={navigate}>
        <AppText size="caption" style={styles.seeAll} variant="normal">
          {tailText}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

export default SectionHeader;
