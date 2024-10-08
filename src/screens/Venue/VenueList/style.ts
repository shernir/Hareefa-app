import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {},
    flatListContainer: {
      paddingHorizontal: theme.spacing.m,
      paddingBottom: theme.spacing.xl * 2,
    },
  });
};

export default generateStyle;
