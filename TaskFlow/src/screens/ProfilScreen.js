import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export default function ProfilScreen({ taches = [] }) {
  const total = taches.length;
  const terminees = taches.filter((t) => t.terminee).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Profil</Text>

        <View style={styles.profileContent}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>VA</Text>
          </View>

          <Text style={styles.name}>Valentin A</Text>
          <Text style={styles.statsText}>
            {terminees} tâches terminées sur {total}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: COULEURS.blanc 
  },
  container: { 
    flex: 1, 
    backgroundColor: COULEURS.blanc 
  },
  headerTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    paddingVertical: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#EEEEEE',
    color: COULEURS.texte 
  },
  profileContent: { 
    alignItems: 'center', 
    marginTop: 40,
    paddingHorizontal: 20 
  },
  avatarContainer: { 
    width: 90, 
    height: 90, 
    borderRadius: 45, 
    backgroundColor: '#6BCBEE', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  avatarText: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: COULEURS.texte 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000000', 
    marginBottom: 6 
  },
  statsText: { 
    fontSize: 15, 
    color: COULEURS.muted 
  },
});