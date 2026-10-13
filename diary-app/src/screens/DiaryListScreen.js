import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

// Import gambar lokal
import happyMood from '../../assets/moods/happy.png';
import avatarImg from '../../assets/avatar.png';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: happyMood,
    isLocal: true,
    moodType: 'happy',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: 'https://picsum.photos/seed/focus/80',
    isLocal: false,
    moodType: 'focus',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: 'https://picsum.photos/seed/calm/80',
    isLocal: false,
    moodType: 'calm',
  },
  {
    id: 4,
    title: 'Koding Sampai Malam',
    date: '2025-10-03',
    preview: 'Mencoba fitur baru di React Native dan berhasil menyelesaikan latihan praktikum...',
    moodUri: 'https://picsum.photos/seed/excited/80',
    isLocal: false,
    moodType: 'excited',
  },
  {
    id: 5,
    title: 'Akhir Pekan Santai',
    date: '2025-10-02',
    preview: 'Istirahat sejenak dari aktivitas rutin, menyeduh kopi sambil mendengarkan musik...',
    moodUri: 'https://picsum.photos/seed/tired/80',
    isLocal: false,
    moodType: 'tired',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header dengan Avatar Pengguna */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Selamat Datang,</Text>
          <Text style={styles.header}>Buku Harian</Text>
        </View>
        <Image source={avatarImg} style={styles.avatar} />
      </View>

      {/* Daftar Kartu Diary */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          isLocal={entry.isLocal}
          moodType={entry.moodType}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
  greeting: {
    fontSize: 14,
    color: '#6B7280',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
});