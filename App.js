import React from 'react';

import BarbecueName from './screens/BarbecueName';
import BarbecuePersons from './screens/BarbecuePersons';
import MeatsAndVegetables from './screens/MeatsAndVegetables';
import SideDishesScreen from './screens/SideDishesScreen';
import CardsSelection from './components/CardsSelection';

import strings from './utils/strings';

export default function App() {
    return <SideDishesScreen />
    //<CardsSelection texts={strings.sideDishes} />
}
