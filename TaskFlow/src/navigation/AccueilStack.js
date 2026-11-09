import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilScreen from '../screens/AccueilScreen';
import AjouterScreen from '../screens/AjouterScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function AccueilStack({ taches, onAjouter, onToggle, onDelete }) {
  return (
    <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen 
        name="Accueil" 
        options={{ headerShown: false }}
      >
        {(props) => (
          <AccueilScreen 
            {...props} 
            taches={taches} 
            onAjouter={onAjouter} 
            onToggle={onToggle} 
            onDelete={onDelete} 
          />
        )}
      </Stack.Screen>

      <Stack.Screen 
        name="Ajouter" 
        options={{ title: 'Nouvelle tâche' }}
      >
        {(props) => <AjouterScreen {...props} onAjouter={onAjouter} />}
      </Stack.Screen>

      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ title: 'Détail de la tâche' }} 
      />
    </Stack.Navigator>
  );
}