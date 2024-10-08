import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginStart: theme.spacing.m,
    },
    text: {
      color: theme.colors.white,
      marginLeft: theme.spacing.s,
    },
  });
};

export default generateStyle;
