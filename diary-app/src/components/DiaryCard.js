import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodUri, isLocal, moodType }) {
  // Menentukan warna border berdasarkan mood
  const getBorderColor = () => {
    switch (moodType) {
      case 'happy':
        return '#10B981'; // Hijau
      case 'focus':
        return '#3B82F6'; // Biru
      case 'calm':
        return '#8B5CF6'; // Ungu
      case 'excited':
        return '#F59E0B'; // Oranye
      case 'tired':
        return '#6B7280'; // Abu-abu
      default:
        return '#E5E7EB'; // Default
    }
  };

  return (
    <View style={[styles.card, { borderColor: getBorderColor() }]}>
      <Image 
        source={isLocal ? moodUri : { uri: moodUri }} 
        style={styles.mood} 
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    color: '#374151',
  },
});