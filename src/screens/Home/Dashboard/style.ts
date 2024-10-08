import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wrraper: {
      flex: 1,
    },
    headerWrapper: {},
    body: {},
    block: {
      height: 100,
      backgroundColor: theme.colors.accent,
      marginTop: 10,
    },
  });
};

export default generateStyle;
