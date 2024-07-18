import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('TipsScreen')}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Blog</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Your content here */}
        <Text style={styles.header}>How to quit social media</Text>
        <Text style={styles.subheader}>and why is it so hard for your brain</Text>
        <Text style={styles.paragraph}>
          Imagine you’re at the peak of a mountain, the world spread out beneath you, a panorama of possibilities. But every time you try to take a step forward, you’re held back by invisible chains. These chains are the subtle, yet powerful, ties of social media. Quitting social media can feel like trying to climb a mountain with these chains pulling you back. But why is it so difficult for our brains to let go? Let’s dive into the science and some practical steps to break free.
        </Text>
        
        <Text style={styles.subheader}>The Allure of Social Media</Text>
        <Text style={styles.paragraph}>
          Social media platforms are designed to be addictive. They provide instant gratification, similar to the rush you get from gambling or eating sugary foods. When you receive a notification, a like, or a comment, your brain releases dopamine, the “feel-good” neurotransmitter. This dopamine release reinforces the behavior, making you crave more. In essence, social media hijacks the brain’s reward system. The anticipation of social interactions and the validation from peers create a cycle that’s hard to break. Over time, this cycle can lead to compulsive behavior, where you feel the need to check your phone constantly.
        </Text>
        
        <Text style={styles.subheader}>The Fear of Missing Out (FOMO)</Text>
        <Text style={styles.paragraph}>
          Another psychological aspect that makes quitting social media difficult is the Fear of Missing Out (FOMO). Social media platforms showcase the highlights of everyone’s lives, often filtered and curated to show only the best moments. This creates an illusion that everyone else is living a more exciting, fulfilling life. FOMO taps into our natural desire for social belonging and status. The thought of missing out on important updates, events, or conversations can trigger anxiety and keep you tethered to social media.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40, // Adjust as per your layout needs
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1, // Ensures the button is above other content
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default HistoryScreen;
