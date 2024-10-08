import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: theme.spacing.s,
      marginTop: theme.spacing.s,
    },
    locationWrapper: {
      flexDirection: 'row',
      gap: theme.spacing.xs,
    },
    kmText: {
      color: theme.colors.primary,
    },
    addressText: {
      color: theme.colors.secondary,
    },
  });
};

export default generateStyle;
