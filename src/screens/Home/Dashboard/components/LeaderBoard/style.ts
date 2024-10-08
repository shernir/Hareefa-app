import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.l,
      marginTop: theme.spacing.m,
      paddingBottom: theme.spacing.l,
    },
    item: {
      paddingVertical: theme.spacing.s,
      paddingHorizontal: theme.spacing.m,
      backgroundColor: theme.colors.widgetBackground,
      marginBottom: theme.spacing.s,
      borderRadius: theme.borderRadius.m,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    metaData: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatarImg: {
      width: 40,
      height: 40,
      marginEnd: theme.spacing.s,
    },
    medalImg: {
      width: 32,
      height: 32,
      marginEnd: theme.spacing.m,
    },
    points: {
      color: theme.colors.secondary,
      marginTop: theme.spacing.xs,
    },
    level: {
      color: theme.colors.secondary,
    },
  });
};

export default generateStyle;
