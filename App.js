import React from 'react';

import BarbecueName from './screens/BarbecueName';
import BarbecuePersons from './screens/BarbecuePersons';
import MeatsAndVegetables from './screens/MeatsAndVegetables';
import SideDishesScreen from './screens/SideDishesScreen';
import SuppliesScreen from './screens/SuppliesScreen';
import DrinksScreen from './screens/DrinksScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Churrasco' component={BarbecueName} />
                <Stack.Screen name='Pessoas' component={BarbecuePersons} />
                <Stack.Screen name='Carnes e Vegatais' component={MeatsAndVegetables} />
                <Stack.Screen name='Acompanhamentos' component={SideDishesScreen} />
                <Stack.Screen name='Suprimentos' component={SuppliesScreen} />
                <Stack.Screen name='Bebidas' component={DrinksScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
