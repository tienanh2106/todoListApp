import React, {ComponentType} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/loginScreen';
import Screen from '../configs/screen';

const Stack = createNativeStackNavigator();

export default function PublicRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.SIGN_IN}
        component={LoginScreen as ComponentType}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
