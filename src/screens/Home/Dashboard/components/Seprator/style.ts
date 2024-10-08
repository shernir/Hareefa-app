import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    sepratorVertical: {
      width: 1,
      height: 30,
      backgroundColor: '#21292B',
      marginHorizontal: theme.spacing.s,
    },
    sepratorHorizontal: {
      height: 1,
      backgroundColor: '#21292B',
      width: '100%',
      marginVertical: theme.spacing.m,
    },
  });
};

export default generateStyle;
