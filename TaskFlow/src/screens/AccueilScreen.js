import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import TacheCard from '../components/TacheCard';
import { COULEURS } from '../styles/couleurs';

const TACHES_FICTIVES = [
  { id: '1', titre: 'Créer le design de l\'application', categorie: 'Design', terminee: true },
  { id: '2', titre: 'Configurer l\'arborescence Expo', categorie: 'Technique', terminee: true },
  { id: '3', titre: 'Développer le composant TacheCard', categorie: 'Développement', terminee: true },
  { id: '4', titre: 'Intégrer l\'écran d\'accueil avec un ScrollView', categorie: 'Développement', terminee: false },
  { id: '5', titre: 'TacheCard de test', categorie: 'Tests', terminee: false },
];

export default function AccueilScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>TaskFlow</Text>
          <Text style={styles.appSubtitle}>Vos tâches du moment</Text>
        </View>

        {/* Liste des tâches */}
        <View style={styles.listContainer}>
          {TACHES_FICTIVES.map((tache) => (
            <TacheCard
              key={tache.id}
              titre={tache.titre}
              categorie={tache.categorie}
              terminee={tache.terminee}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  container: {
    padding: 20,
    backgroundColor: COULEURS.fond,
  },
  header: {
    marginBottom: 20,
    marginTop: 10,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COULEURS.primaire,
  },
  appSubtitle: {
    fontSize: 14,
    color: COULEURS.muted,
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 12,
  },
});