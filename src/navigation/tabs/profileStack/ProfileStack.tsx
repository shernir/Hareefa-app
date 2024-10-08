import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../constants/Routes';
import ProfileDetails from 'screens/Profile/ProfileDetails';

function ProfileStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Profile}
        options={{
          headerShown: false,
        }}
        component={ProfileDetails}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
