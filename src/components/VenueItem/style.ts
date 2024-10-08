import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 10,
      backgroundColor: theme.colors.widgetBackground,
      padding: theme.spacing.m,
      marginBottom: theme.spacing.m,
    },
    matchImg: {
      width: 40,
      height: 40,
    },
    metaData: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.m,
    },
    matchInfo: {
      gap: theme.spacing.xs,
    },
    addressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    kmText: {
      color: theme.colors.primary,
      marginHorizontal: theme.spacing.xs,
    },
    addressText: {
      color: theme.colors.secondary,
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.s,
    },
    footerItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 30,
      height: 30,
    },
  });
};

export default generateStyle;
