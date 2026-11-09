import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TacheCard from '../components/TacheCard';
import { COULEURS } from '../styles/couleurs';

export default function AccueilScreen({ taches = [], onToggle, onDelete }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.appTitle}>TaskFlow</Text>
          <Pressable 
            style={styles.addButton} 
            onPress={() => navigation.navigate('Ajouter')}
          >
            <Text style={styles.addButtonText}>Ajouter</Text>
          </Pressable>
        </View>

        <FlatList
          data={taches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable 
              onPress={() => navigation.navigate('Detail', { 
                id: item.id, 
                titre: item.titre, 
                categorie: item.categorie, 
                terminee: item.terminee,
              })}
            >
              <TacheCard
                titre={item.titre}
                categorie={item.categorie}
                terminee={item.terminee}
                onToggle={() => onToggle(item.id)}
                onDelete={() => onDelete(item.id)}
              />
            </Pressable>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COULEURS.fond },
  container: { flex: 1, padding: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 10 },
  appTitle: { fontSize: 28, fontWeight: 'bold', color: COULEURS.primaire },
  addButton: { backgroundColor: COULEURS.primaire, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  addButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
  listContainer: { paddingBottom: 20, gap: 10 },
});