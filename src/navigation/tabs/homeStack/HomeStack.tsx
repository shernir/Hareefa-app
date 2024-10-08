import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../constants/Routes';
import Dashboard from '../../../screens/Home/Dashboard';

function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Dashboard}
        options={{
          headerShown: false,
        }}
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
