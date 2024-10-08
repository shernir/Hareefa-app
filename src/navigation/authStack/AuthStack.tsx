import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../constants/Routes';
import AuthLanding from '../../screens/Auth/AuthLanding';

function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Login}
        options={{
          headerShown: false,
        }}
        component={AuthLanding}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
