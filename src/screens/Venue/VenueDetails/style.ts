import {StyleSheet} from 'react-native';
import {Theme} from 'theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      padding: theme.spacing.m,
      flex: 1,
    },
    venueImg: {
      width: '100%',
    },
    imgContainer: {
      borderRadius: theme.borderRadius.m,
      overflow: 'hidden',
      marginTop: theme.spacing.m,
    },
    courtTypeContainer: {
      width: '100%',
      flexDirection: 'row',
      gap: theme.spacing.m,
      marginTop: theme.spacing.m,
    },
    courtItem: {
      padding: theme.spacing.m,
      gap: theme.spacing.m,
      backgroundColor: theme.colors.widgetBackground,
      borderRadius: theme.borderRadius.m,
      flex: 1,
    },
    courtItemImg: {
      width: 32,
      height: 32,
    },
    descriptionContainer: {
      marginTop: theme.spacing.m,
      gap: theme.spacing.s,
    },
    descriptionText: {
      color: theme.colors.secondaryText,
      lineHeight: 24,
    },
    contactContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.m,
      alignItems: 'center',
    },
    contactBtn: {
      paddingVertical: theme.spacing.s,
      paddingHorizontal: theme.spacing.m,
      borderRadius: theme.borderRadius.xl,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      flex: 1,
      alignItems: 'center',
    },
    contactBtnText: {
      color: theme.colors.primary,
    },
    mapContainer: {
      marginTop: theme.spacing.l,
      height: 200,
    },
    mapImg: {
      width: '100%',
      height: 200,

      borderRadius: theme.borderRadius.m,
    },
    readMoreLabel: {
      color: theme.colors.primary,
      textAlign: 'right',
    },
    bookContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.m,
      backgroundColor: theme.colors.background,
      borderTopEndRadius: theme.borderRadius.l,
      borderTopStartRadius: theme.borderRadius.l,
      position: 'absolute',
      width: '100%',
      height: 100,
      bottom: 0,
      zIndex: 1,
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: -2}, // Negative height for top shadow
      shadowOpacity: 0.7, // Opacity of the shadow
      shadowRadius: 6, // Blurriness of the shadow
      elevation: 5, // Needed for Android
      padding: theme.spacing.m,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing.s,
    },
    duration: {
      color: theme.colors.secondaryText,
    },
    priceText: {
      color: theme.colors.accent,
    },
    btnContainer: {
      width: 120,
    },
  });
};

export default generateStyle;
