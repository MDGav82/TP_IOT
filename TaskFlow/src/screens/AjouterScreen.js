import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export default function AjouterScreen({ navigation, onAjouter }) {
  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState('');

  const handleAjouter = () => {
    if (!titre.trim()) return;

    const nouvelleTache = {
      id: Date.now().toString(),
      titre: titre,
      categorie: categorie.trim() || 'Général',
      terminee: false,
    };

    if (onAjouter) {
      onAjouter(nouvelleTache);
    }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>Titre de la tâche</Text>
        <TextInput
          style={styles.input}
          placeholder="Titre de la tâche"
          placeholderTextColor={COULEURS.muted}
          value={titre}
          onChangeText={setTitre}
        />

        <Text style={styles.label}>Catégorie</Text>
        <TextInput
          style={styles.input}
          placeholder="Catégorie"
          placeholderTextColor={COULEURS.muted}
          value={categorie}
          onChangeText={setCategorie}
        />

        <Pressable style={styles.button} onPress={handleAjouter}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COULEURS.fond },
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: COULEURS.texte, marginBottom: 8, marginTop: 12 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: COULEURS.muted, borderRadius: 8, padding: 12, fontSize: 16, color: COULEURS.texte },
  button: { backgroundColor: COULEURS.primaire, borderRadius: 8, padding: 15, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});