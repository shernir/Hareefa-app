import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.spacing.l,
    },
    container: {
      borderRadius: theme.borderRadius.l,
      backgroundColor: theme.colors.primary,
      overflow: 'hidden',
      marginTop: theme.spacing.m,
    },
    body: {
      padding: theme.spacing.m,
      backgroundColor: theme.colors.primary,
    },
    footer: {
      height: 40,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.s,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    heading: {
      color: '#E4E4E4',
    },
    subHeadingText: {
      fontSize: 24,
    },
    subHeading: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: theme.spacing.xs,
      marginTop: theme.spacing.xs,
    },
    gradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0, // Full coverage
    },
    logo: {
      position: 'absolute',
      right: 20,
      top: 7,
      opacity: 0.4,
      zIndex: 1,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
    },
    verticalSeprator: {
      height: 15,
      width: 1,
      backgroundColor: theme.colors.white,
      marginHorizontal: 10,
    },
  });
};

export default generateStyle;
