import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack/HomeStack';
import ProfileStack from './profileStack/ProfileStack';
import {useSelector} from 'react-redux';
import {themeSelector} from 'redux/slices/theme/theme.selector';
import generateStyle from './style';
import HomeIcon from '../../assets/imgs/home-tab-icon.svg';
import ProfileIcon from '../../assets/imgs/profile-tab-icon.svg';
import HomeIconActive from '../../assets/imgs/home-tab-icon-active.svg';
import ProfileIconActive from '../../assets/imgs/profile-tab-icon-active.svg';
import VenueIcon from '../../assets/imgs/venue-tab-icon.svg';
import VenueIconActive from '../../assets/imgs/venue-tab-icon-active.svg';
import MatchIcon from '../../assets/imgs/match-tab-icon.svg';
import MatchIconActive from '../../assets/imgs/match-tab-icon-active.svg';

import Logo from '../../assets/imgs/logo.svg';
import {View} from 'react-native';
import VenueStack from './venueStack/VenueStack';
import {Routes} from 'constants/Routes';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

function Tabs() {
  const Tab = createBottomTabNavigator();
  const theme = useSelector(themeSelector);
  const styles = generateStyle(theme);
  const BottomTabHiddenRoutes = [Routes.VenueDetails];
  const tabs = [
    {
      name: 'Home',
      stack: HomeStack,
      icon: HomeIcon,
      activeIcon: HomeIconActive,
    },
    {
      name: 'venue',
      stack: VenueStack,
      icon: VenueIcon,
      activeIcon: VenueIconActive,
    },
    {
      name: 'CreateMatch',
      stack: ProfileStack,
      icon: Logo,
      activeIcon: Logo,
    },
    {
      name: 'Matchs',
      stack: ProfileStack,
      icon: MatchIcon,
      activeIcon: MatchIconActive,
    },
    {
      name: 'Profile',
      stack: ProfileStack,
      icon: ProfileIcon,
      activeIcon: ProfileIconActive,
    },
  ];
  return (
    <Tab.Navigator>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          options={({route}) => {
            const focusedRouteName = getFocusedRouteNameFromRoute(route);

            return {
              headerShown: false,
              tabBarStyle: {
                ...styles.tabBar,
                display: BottomTabHiddenRoutes.includes(focusedRouteName || '')
                  ? 'none'
                  : 'flex',
              },
              tabBarLabel: ({focused}) => {
                return focused ? <View style={styles.activeDot} /> : null;
              },
              tabBarIcon: ({focused}) => {
                if (tab.name === 'CreateMatch') {
                  return (
                    <View style={styles.createMatchTab}>
                      <tab.icon width={30} height={30} />
                    </View>
                  );
                }
                return focused ? <tab.activeIcon /> : <tab.icon />;
              },
            };
          }}
          component={tab.stack}
        />
      ))}
    </Tab.Navigator>
  );
}

export default Tabs;
