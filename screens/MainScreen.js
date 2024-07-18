import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const navigateToTipsScreen = () => {
    setModalVisible(false); // Close modal before navigating
    navigation.navigate('TipsScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left side */}
        <TouchableOpacity style={styles.menuButton} onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/images/line.3.horizontal.png')} style={styles.icon} />
        </TouchableOpacity>
        
        {/* Center */}
        <Text style={styles.headerText}>CUPID</Text>
        
        {/* Right side */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Blog')}>
          <Image source={require('../assets/images/clock.arrow.circlepath.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Name text */}
      <Text style={styles.nameText}>Regular</Text>

      {/* Main content */}
      <View style={styles.content}>
        <Text style={[styles.instructionText, styles.marginTop]}>Upload a screenshot</Text>
        <Text style={styles.instructionText}>of a chat or bio</Text>
        
        {/* Image preview */}
        <View style={styles.imagePreviews}>
          <Image source={require('../assets/images/jooo.png')} style={styles.image} />
        </View>

        {/* Upload Screenshot Button with the new shape */}
        <View style={styles.uploadSection}>
          <TouchableOpacity style={styles.heartShape}>
            <Text style={styles.heartShapeText}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate('UploadScreen')}>
            <Text style={styles.uploadButtonText}>Upload Screenshot</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Image source={require('../assets/images/xmark.circle.png')} style={styles.closeButtonIcon} />
            </TouchableOpacity>
            <View style={styles.modalTextContainer}>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={styles.modalTitle}>Struggling to get matches?</Text>
                <View style={styles.modalButtonContent}>
                  <Text style={styles.modalDescription}>Try our AI app to enhance your appearance with personalized advice.</Text>
                  <Image source={require('../assets/images/chevron.right.png')} style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tipsButton} onPress={navigateToTipsScreen}>
                <Text style={styles.tipsButtonText}>💡 Tips</Text>
                <Image source={require('../assets/images/chevron.right.png')} style={styles.arrowIconRight} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc92c0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  menuButton: {
    padding: 10,
  },
  button: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  nameText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  marginTop: {
    marginTop: -10, // Adjust this value to move the text up or down
  },
  imagePreviews: {
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20,
    position: 'relative',
  },
  image: {
    width: 250,
    height: 250,
  },
  uploadSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, // Ensure there is some margin to push the button below the images
  },
  uploadButton: {
    backgroundColor: '#000000', // Black background color for button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  uploadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // White color for button text
  },
  heartShape: {
    backgroundColor: '#000000', // Black background color for shape
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartShapeText: {
    fontSize: 20,
    color: '#ffffff', // White color for emoji
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  closeButtonIcon: {
    width: 24,
    height: 24,
  },
  modalTextContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: '#fc92c0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  modalButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    marginRight: 10, // Adjust margin between text and arrow
  },
  tipsButton: {
    backgroundColor: '#fc92c0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between elements
  },
  tipsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    marginLeft: 10, // Adjust margin as needed
  },
  arrowIconRight: {
    width: 20,
    height: 20,
    marginLeft: 10, // Adjust margin as needed
  },
});

export default MainScreen;
