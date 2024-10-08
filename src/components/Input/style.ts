import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.widgetBackground,
      borderRadius: theme.borderRadius.xl,
      height: 48,
      alignItems: 'center',
      flexDirection: 'row',
      paddingStart: theme.spacing.m,
      gap: theme.spacing.s,
    },
    input: {
      fontSize: theme.fontSize.body,
      color: theme.colors.white,
    },
  });
};

export default generateStyle;
