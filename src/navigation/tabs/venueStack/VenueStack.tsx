import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../constants/Routes';
import VenueList from 'screens/Venue/VenueList';
import VenueDetails from 'screens/Venue/VenueDetails';

function VenueStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.VenueList}
        options={{
          headerShown: false,
        }}
        component={VenueList}
      />
      <Stack.Screen
        name={Routes.VenueDetails}
        options={{
          headerShown: false,
        }}
        component={VenueDetails}
      />
    </Stack.Navigator>
  );
}

export default VenueStack;
