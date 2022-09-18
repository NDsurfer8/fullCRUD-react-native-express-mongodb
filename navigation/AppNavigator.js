import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../src/screens/Dashboard';
import BooksDetailsScreen from '../src/screens/BooksDetailsScreen';
import EditScreen from '../src/screens/EditScreen';


const Stack = createNativeStackNavigator();



const AppNavigator = () => {


    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name='Books'
                    component={Dashboard}
                />
                <Stack.Screen
                    name='Details'
                    component={BooksDetailsScreen}
                />
                <Stack.Screen
                    name='Edit'
                    component={EditScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default AppNavigator