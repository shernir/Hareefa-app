import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import WalkthroughStack from './walkthroughStack/WalkthroughStack';
import {useSelector} from 'react-redux';
import {themeSelector} from '../redux/slices/theme/theme.selector';
import AuthStack from './authStack/AuthStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../constants/Routes';
import Tabs from './tabs/Tabs';

function RootNavigation() {
  const theme = useSelector(themeSelector);
  const RootStack = createNativeStackNavigator();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
    },
  };
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name={Routes.WalkthroughStack}
          component={WalkthroughStack}
        />
        <RootStack.Screen
          options={{animation: 'slide_from_bottom'}}
          name={Routes.AuthStack}
          component={AuthStack}
        />
        <RootStack.Screen name={Routes.Tabs} component={Tabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
