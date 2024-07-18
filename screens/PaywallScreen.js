import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaywallScreen = () => {
  const navigation = useNavigation();

  const navigateToMainScreen = () => {
    navigation.navigate('MainScreen'); // Navigate to MainScreen component
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/match.png')} // Adjust the path relative to your component location
        style={styles.image}
      />
      <Text style={styles.text}>🔥 Unlimited Rizz</Text>
      <Text style={styles.text}>🤝 Trusted by Millions</Text>
      <Text style={styles.text}>❤️‍🔥 Coach Recommended</Text>
      <Text style={styles.text}>🍯 Proven to Get Dates</Text>
      <Text style={styles.text}>📈 x10 More Responses</Text>
      <Text style={styles.text}>😈 x8 More Dates</Text>

      <View style={styles.glowingContainer}>
        <Text style={styles.elevateText}>Elevate Your Game</Text>
        <TouchableOpacity style={styles.button} onPress={navigateToMainScreen}>
          <Text style={styles.buttonText}>Unlock Free Trial</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>risk-free trial then $8.67/week</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
  },
  image: {
    height: 134,
    width: 342,
    resizeMode: 'contain',
  },
  glowingContainer: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#3b3b3b',
    shadowColor: '#00A676', // Glow color
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  elevateText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00A676',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default PaywallScreen;
