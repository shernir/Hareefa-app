import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/type';

const generateStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderHeaderContainer: {
      backgroundColor: theme.colors.primary,
      height: 350,
    },
    sliderfooterContainer: {
      backgroundColor: theme.colors.background,
      flex: 1,
      borderRadius: 30,
      position: 'relative',
      marginTop: -theme.borderRadius.l,
      padding: theme.spacing.m,
      shadowColor: theme.colors.primary,
      shadowOffset: {width: 0, height: -7}, // Negative height for top shadow
      shadowOpacity: 0.1, // Opacity of the shadow
      shadowRadius: 6, // Blurriness of the shadow
      elevation: 5, // Needed for Android
      zIndex: 1, // Keeps the shadow on top
    },
    bgImage: {
      width: '100%',
      height: '100%',
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing.m,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    swiperDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      margin: 3,
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    swiperActiveDot: {
      width: 30,
      height: 10,
      borderRadius: 5,
      margin: 3,
      backgroundColor: theme.colors.primary,
    },
    logoContainer: {
      margin: theme.spacing.s,
    },
    animatedView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    button: {
      position: 'absolute',
      bottom: 30,
      alignSelf: 'center',
      padding: 10,
      backgroundColor: '#333',
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
};

export default generateStyle;
