import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export default function TacheCard({ titre, categorie, terminee }) {
  return (
    <View style={styles.card}>
      {/* Titre  + Badge  */}
      <View style={styles.topRow}>
        <Text style={[styles.titre, terminee && styles.texteBarre]}>
          {titre}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{categorie}</Text>
        </View>
      </View>

      {/* Statut */}
      <View style={styles.bottomRow}>
        <Text style={[styles.statutText, terminee ? styles.vert : styles.gris]}>
          {terminee ? '✓ Terminée' : '○ À faire'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COULEURS.texte,
    flex: 1,
    marginRight: 8,
  },
  texteBarre: {
    textDecorationLine: 'line-through',
    color: COULEURS.muted,
  },
  badge: {
    backgroundColor: COULEURS.accent,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statutText: {
    fontSize: 13,
    fontWeight: '500',
  },
  vert: {
    color: '#2E7D32',
  },
  gris: {
    color: COULEURS.muted,
  },
});