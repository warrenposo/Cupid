import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaywallScreen from './screens/PaywallScreen';
import MainScreen from './screens/MainScreen';
import TipsScreen from './screens/TipsScreen';
import HistoryScreen from './screens/HistoryScreen';
import Blog from './screens/Blog';
import UploadScreen from './screens/UploadScreen';

const Stack = createStackNavigator();

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Timeout to simulate a splash screen delay
    const timeout = setTimeout(() => {
      setSplashVisible(false); // Hide splash screen after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  if (splashVisible) {
    // Show splash screen
    return (
      <View style={[styles.container, { backgroundColor: 'black' }]}>
        <Text style={[styles.text, { color: '#ED217C', fontFamily: 'Syncopate-Bold' }]}>
          CUPID
        </Text>
      </View>
    );
  }

  // After splash screen, show your navigation container
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Paywall">
        <Stack.Screen name="Paywall" component={PaywallScreen} options={{ headerShown: false}} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="TipsScreen" component={TipsScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false}}/>
        <Stack.Screen name="UploadScreen" component={UploadScreen} options={{ headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'Syncopate-Bold',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ED217C',
  },
});
