import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 100,
      height: 56,
      justifyContent: 'center',
      marginBottom: theme.spacing.m,
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    outline: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.secondary,
      borderWidth: 1,
    },
    textPrimary: {
      color: theme.colors.btnText,
    },
    textOutline: {
      color: theme.colors.white,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.s,
    },
  });
};

export default generateStyle;
