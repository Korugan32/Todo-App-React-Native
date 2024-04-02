import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import ShowInfo from '../components/ShowInfo';
import AddTodoPage from '../components/AddTodoPage';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ShowInfo" component={ShowInfo} />
      <Stack.Screen name="AddTodoPage" component={AddTodoPage} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
        <StackNavigation/>
        </NavigationContainer>
  );
}
