import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginEnd: '7.5%',
      borderRadius: 10,
      backgroundColor: theme.colors.widgetBackground,
      overflow: 'hidden',
    },
    coverImg: {
      height: 80,
      width: '100%',
      resizeMode: 'cover',
    },
    footer: {
      padding: theme.spacing.m,
    },
    desc: {
      color: theme.colors.secondary,
      marginTop: theme.spacing.xs,
    },
    metaData: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      gap: theme.spacing.xs,
      alignItems: 'center',
    },
    kbText: {
      color: theme.colors.primary,
    },
  });
};

export default generateStyle;
