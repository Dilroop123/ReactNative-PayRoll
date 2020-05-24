import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import ChooseBuisness from '../screens/buisness/ChooseBuisness';
import AddBuisness from '../screens/buisness/Addbuisness';
import AddLocation from '../screens/location/AddLocation';
import SelectLocation from '../screens/location/SelectLocation';
import SelectEmploy from '../screens/employ/SelectEmploy';
import AddEmploy from '../screens/employ/AddEmploy';
import Terminate from '../screens/Terminate/Terminate';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
       
        headerShown:false 
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ChooseBuisness" component={ChooseBuisness} />
      <Stack.Screen name="AddBuisness" component={AddBuisness} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="SelectEmploy" component={SelectEmploy} />
      <Stack.Screen name="AddEmploy" component={AddEmploy} />
      <Stack.Screen name="Terminate" component={Terminate} />
    </Stack.Navigator>
  );
}