import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export default function DetailScreen({ route, navigation }) {
  const { titre, categorie, onToggle } = route.params || {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titreTache}>{titre || 'Titre'}</Text>
          <Text style={styles.info}>Catégorie : {categorie || 'N/A'}</Text>
          <Pressable 
            style={styles.button} 
            onPress={() => {
              if (onToggle) onToggle();
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Marquer terminée</Text>
          </Pressable>
          <Pressable onPress={() => navigation.goBack()} style={styles.retourContainer}>
            <Text style={styles.retourText}>Retour</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COULEURS.fond },
  container: { padding: 20 },
  card: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 12, borderWidth: 1, borderColor: '#EFEFEF' },
  titreTache: { fontSize: 20, fontWeight: 'bold', color: COULEURS.texte, marginBottom: 8 },
  info: { fontSize: 14, color: COULEURS.texte, marginBottom: 20 },
  button: { backgroundColor: COULEURS.primaire, padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  retourContainer: { alignItems: 'center' },
  retourText: { color: COULEURS.muted, fontSize: 14, fontWeight: '500' },
});