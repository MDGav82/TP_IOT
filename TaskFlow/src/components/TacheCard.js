import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export default function TacheCard({ titre, categorie, terminee, onToggle, onDelete }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={[styles.titre, terminee && styles.texteBarre]}>
          {titre}
        </Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{categorie}</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <Pressable 
          style={[styles.statusButton, terminee ? styles.btnTerminee : styles.btnAFaire]} 
          onPress={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          <Text style={[styles.statusText, terminee ? styles.textTerminee : styles.textAFaire]}>
            {terminee ? '✓ Terminée' : '○ À faire'}
          </Text>
        </Pressable>

        {onDelete && (
          <Pressable 
            style={styles.deletePressable}
            onPress={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Text style={styles.deleteText}>Supprimer</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COULEURS.blanc,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COULEURS.texte,
    flex: 1,
    marginRight: 10,
  },
  texteBarre: {
    textDecorationLine: 'line-through',
    color: COULEURS.muted,
  },
  badgeContainer: {
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00ACC1',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  statusButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  btnTerminee: {
    backgroundColor: '#E8F5E9',
    borderColor: '#A5D6A7',
  },
  btnAFaire: {
    backgroundColor: '#FFF3E0',
    borderColor: '#FFE0B2',
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
  },
  textTerminee: {
    color: '#2E7D32',
  },
  textAFaire: {
    color: '#EF6C00',
  },
  deletePressable: {
    paddingVertical: 4,
  },
  deleteText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E53935',
  },
});