import {StyleSheet} from 'react-native';
import {Theme} from '../../../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      marginTop: 60,
    },
    heading: {
      textAlign: 'center',
    },
    text: {
      color: theme.colors.secondaryText,
      marginLeft: theme.spacing.s,
      textAlign: 'center',
      marginTop: theme.spacing.l,
      lineHeight: 24,
    },
  });
};

export default generateStyle;
