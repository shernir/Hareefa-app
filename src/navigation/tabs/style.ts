import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    tabBar: {
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      borderTopColor: 'rgba(255, 255, 255, 0.06)',
    },
    activeDot: {
      backgroundColor: theme.colors.primary,
      width: 5,
      height: 5,
      borderRadius: 2.5,
    },
    createMatchTab: {
      backgroundColor: theme.colors.primary,
      width: 50,
      height: 50,
      borderRadius: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: -20,
      position: 'absolute',
      shadowColor: theme.colors.primary,
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.7,
    },
  });
};

export default generateStyle;
