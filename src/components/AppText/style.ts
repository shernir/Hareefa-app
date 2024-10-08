import {StyleSheet} from 'react-native';
import {fontFamilies} from '../../constants/fonts';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    baseStyle: {
      fontSize: theme.fontSize.heading,
      color: theme.colors.white,
      fontFamily: fontFamilies.ARCHIVO.medium,
    },
  });
};

export default generateStyle;
