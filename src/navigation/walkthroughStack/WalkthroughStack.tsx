import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WalkthroughScreen from '../../screens/Walkthrough';

function WalkthroughStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Walkthrough">
      <Stack.Screen
        name="Walkthrough"
        options={{
          headerShown: false,
        }}
        component={WalkthroughScreen}
      />
    </Stack.Navigator>
  );
}

export default WalkthroughStack;
