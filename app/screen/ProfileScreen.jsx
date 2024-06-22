import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image source={require ('../../assets/images/photohead.png')} style={styles.profileImage} />
        <Text style={styles.name}>Farhan Yogawardhana Setiambodo</Text>
        <Text style={styles.bio}>Greetings, I'm Farhan. Currently studying at SMK Telkom Malang, Indonesia. Majoring in computer and network engineering.</Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/farhanyaw')}>
          <Text style={styles.buttonText}>Visit my GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'dodgerblue',
  },
  container: {
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
