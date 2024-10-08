import AppText from 'components/AppText';
import React, {ReactElement} from 'react';
import {TouchableOpacity, View} from 'react-native';
import BackIcon from '../../assets/imgs/back-icon.svg';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import {useNavigation} from '@react-navigation/native';
interface ComponentProps {
  isBack?: boolean;
  title: string;
  icons?: ReactElement[];
}
function Header({isBack, title, icons}: ComponentProps) {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {isBack && <BackIcon />}
      </TouchableOpacity>
      <AppText size="subheading" variant="medium" style={styles.title}>
        {title}
      </AppText>
      <View style={styles.iconContainer}>
        {icons &&
          icons.map((icon, index) => {
            return <View key={index}>{icon}</View>;
          })}
      </View>
    </View>
  );
}

export default Header;
