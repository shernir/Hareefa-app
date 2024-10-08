import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.m,
    },
    title: {
      color: theme.colors.white,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: theme.spacing.s,
    },
  });
};

export default generateStyle;
