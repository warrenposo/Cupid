import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation

const UploadScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('MainScreen'); // Navigate back to MainScreen
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity style={styles.topLeftButton} onPress={handleBackPress}>
            <Image
              source={require('../assets/images/chevron.left.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.topRightButton}>
            <Image
              source={require('../assets/images/plus.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>CUPID</Text>
        <Text style={styles.subtitle}>Regular</Text>
        <View style={styles.screenshotContainer}>
          <Text style={styles.screenshotText}>User's screenshot</Text>
        </View>
        <Text style={styles.copyRizzText}>👇 Tap to copy rizz 👇</Text>

        <View style={styles.textBlock}>
          <Text style={styles.emoji}>❤️</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.emoji}>👑</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.emoji}>🧠</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <View style={styles.heartIcon}>
          <Text style={styles.heartIconText}>❤️</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Rizz Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc92c0',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 100, // Padding to prevent content from being covered by the fixed button
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  topLeftButton: {
    borderRadius: 20,
    padding: 10,
  },
  topRightButton: {
    borderRadius: 20,
    padding: 10,
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  screenshotContainer: {
    width: '80%',
    aspectRatio: 3 / 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  screenshotText: {
    color: 'black',
    textAlign: 'center',
  },
  copyRizzText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent background color
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    width: '80%',
  },
  emoji: {
    fontSize: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heartIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  heartIconText: {
    fontSize: 24,
    color: 'red',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UploadScreen;
