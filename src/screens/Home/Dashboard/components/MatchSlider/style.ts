import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.l,
    },
    seeAll: {
      color: theme.colors.primary,
    },
    container: {},
    item: {
      height: 200,
      backgroundColor: theme.colors.accent,
    },
  });
};

export default generateStyle;
