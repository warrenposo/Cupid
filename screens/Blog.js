import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Blog = () => {
  const navigation = useNavigation(); // Initialize navigation object

  const screenshots = Array.from({ length: 15 });

  const renderItem = ({ item, index }) => (
    <View style={styles.screenshotContainer}>
      <Text style={styles.screenshotText}>User's screenshot</Text>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  const handleBackPress = () => {
    navigation.navigate('MainScreen'); // Navigate to MainScreen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>History</Text>
      <FlatList
        data={screenshots}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fc92c0',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  backButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  flatListContent: {
    justifyContent: 'center',
  },
  screenshotContainer: {
    width: 122,
    height: 183,
    backgroundColor: 'black',
    margin: 4, // half of the gap to make a total of 8px between items
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
  },
  screenshotText: {
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Blog;
