import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.l,
      paddingTop: theme.spacing.l,
    },
    seeAll: {
      color: theme.colors.primary,
    },
  });
};

export default generateStyle;
