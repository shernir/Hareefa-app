import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginEnd: '5.5%',
      borderRadius: 10,
      backgroundColor: theme.colors.widgetBackground,
      padding: theme.spacing.m,
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

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    footerItem: {
      flexDirection: 'row',
      gap: theme.spacing.m,
      alignItems: 'center',
      //   flex: 1,
    },
    avatar: {
      width: 30,
      height: 30,
    },
  });
};

export default generateStyle;
