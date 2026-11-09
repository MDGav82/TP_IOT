import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilStack from './AccueilStack';
import ProfilScreen from '../screens/ProfilScreen';
import { COULEURS } from '../styles/couleurs';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const [taches, setTaches] = useState([
    { id: '1', titre: 'Créer la maquette', categorie: 'Design', terminee: true },
    { id: '2', titre: 'Installer Expo', categorie: 'Setup', terminee: true },
    { id: '3', titre: 'Composant TacheCard', categorie: 'Dev', terminee: true },
    { id: '4', titre: 'Écran d\'accueil', categorie: 'Dev', terminee: false },
  ]);

  const ajouterTache = (nouvelleTache) => {
    setTaches((prev) => [...prev, nouvelleTache]);
  };

  const basculerTache = (id) => {
    setTaches((prev) =>
      prev.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches((prev) => prev.filter((tache) => tache.id !== id));
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COULEURS.primaire,
        tabBarInactiveTintColor: COULEURS.muted,
      }}
    >
      <Tab.Screen 
        name="TachesTab" 
        options={{ title: 'Tâches', headerShown: false }}
      >
        {(props) => (
          <AccueilStack 
            {...props} 
            taches={taches} 
            onAjouter={ajouterTache} 
            onToggle={basculerTache} 
            onDelete={supprimerTache} 
          />
        )}
      </Tab.Screen>

      <Tab.Screen 
        name="Profil" 
        options={{ title: 'Profil' }}
      >
        {(props) => <ProfilScreen {...props} taches={taches} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}