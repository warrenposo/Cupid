import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'; // Import Image component
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TipsScreen = () => {
  const navigation = useNavigation();

  // Function to navigate to HistoryScreen
  const goToHistoryScreen = () => {
    navigation.navigate('HistoryScreen');
  };

  return (
    <View style={styles.container}>
      {/* Top bar with black background */}
      <View style={styles.topBar}>
        {/* Back button with icon */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          {/* Add your back button icon image here */}
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        {/* Header text */}
        <Text style={styles.headerText}>TIPS</Text>
      </View>

      {/* Scrollable area for buttons */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Original buttons with images */}
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>What Attracts People?</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>First Impression Matter</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>First Date Success</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>Tips for a successful first date</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>Engaging Conversations</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Additional buttons with images */}
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>Avoid these mistakes</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>Date Dress Tips</Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToHistoryScreen}>
          <Text style={styles.buttonText}>
            Struggling to get matches? Try Our AI app to enhance your appearance with personalized advice.
          </Text>
          <Image source={require('../assets/images/chevron.right.png')} style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Black background
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  headerText: {
    flex: 1,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', // White header text
    fontFamily: 'Syncopate-Bold', // Make sure Syncopate-Bold is properly loaded
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10, // Adjusted padding for better spacing
  },
  button: {
    backgroundColor: '#fc92c0',
    paddingVertical: 50, // Adjusted padding for smaller buttons
    borderRadius: 25,
    marginBottom: 10,
    justifyContent: 'center', // Ensure text is centered vertically
    flexDirection: 'row', // Arrange text and image in a row
    alignItems: 'center', // Align items in the center horizontally
  },
  buttonText: {
    color: 'black', // Black button text
    fontWeight: 'bold',
    flex: 1, // Allow text to expand to fill available space
  },
  icon: {
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
    marginLeft: 10, // Add spacing between text and image
  },
});

export default TipsScreen;
