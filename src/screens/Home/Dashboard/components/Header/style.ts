import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
      height: 50,
    },
    caption: {
      color: theme.colors.secondary,
      marginTop: theme.spacing.xs,
    },
    wrapper: {
      height: 120,
      overflow: 'hidden',
      paddingHorizontal: theme.spacing.l,
    },
    inputContainer: {
      height: 50,
    },
  });
};

export default generateStyle;
