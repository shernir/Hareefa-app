import React, {ReactNode, useCallback} from 'react';
import {Text, TextStyle, TextProps, I18nManager} from 'react-native';
import {themeSelector} from '../../redux/slices/theme/theme.selector';
import {useSelector} from 'react-redux';
import generateStyle from './style';
import {FontSize} from '../../theme/type';
import {fontFamilies} from '../../constants/fonts';

interface ComponentProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: 'normal' | 'medium' | 'semiBold' | 'bold';
  lang?: Global;
  size?: keyof FontSize;
  numberOfLines?: number;
}

function AppText({
  children,
  style,
  variant = 'normal',
  size = 'body',
}: ComponentProps): ReactNode {
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);

  const customStyle = useCallback((): TextStyle => {
    const fontFamilyPerLang = I18nManager.isRTL ? 'CAIRO' : 'ARCHIVO';
    // @ts-ignore
    const fontFamily = fontFamilies[fontFamilyPerLang][variant];

    return {
      fontSize: theme.fontSize[size],
      fontFamily: fontFamily,
    };
  }, [theme.fontSize, size, variant]);

  return (
    <Text style={[styles.baseStyle, style, customStyle()]}>{children}</Text>
  );
}

export default AppText;
