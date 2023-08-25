import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {ComponentType} from 'react';
import Screen from '../configs/screen';
import HomeScreen from '../../screens/homeScreen';
import {LeftHeader, RightHeader} from '@/components/header';
import {ParamListBase, RouteProp} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

type headerType =
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: any;
    }) => NativeStackNavigationOptions);

const defaultHeader: headerType = {
  headerStyle: {
    backgroundColor: '#D1E5ED',
  },
  headerLeft: () => <LeftHeader />,
  headerRight: () => <RightHeader />,
  title: '',
};

export default function PrivateRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.HOME}
        component={HomeScreen as ComponentType}
        options={defaultHeader}
      />
    </Stack.Navigator>
  );
}
