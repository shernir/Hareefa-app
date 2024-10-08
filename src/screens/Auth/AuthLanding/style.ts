import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    logo: {
      marginBottom: 70,
    },
    title: {
      textAlign: 'center',
      marginBottom: theme.spacing.m,
    },
    description: {
      textAlign: 'center',
      color: theme.colors.secondaryText,
      lineHeight: 24,
    },
    btnContainer: {
      marginTop: theme.spacing.m,
      padding: theme.spacing.m,
      width: '100%',
    },
    skipWrapper: {
      position: 'absolute',
      bottom: theme.spacing.xl,
    },
    skipText: {
      color: theme.colors.secondaryText,
    },
  });
};

export default generateStyle;
