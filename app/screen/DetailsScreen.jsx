import React from 'react';
import { Alert } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route }) {
  const { photo } = route.params;
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${photo.id}`)
      .then((response) => {
        setDescription(response.data.body);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [photo.id]);

  const handleOrder = () => {
    Alert.alert("Order", "oops this application is under construction");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.url }} style={styles.image} />
      <Text style={styles.title}>{photo.title}</Text>
      <Text style={styles.description}>
        {description}
      </Text>
      <TouchableOpacity style={styles.orderbtn} onPress={handleOrder}>
        <Text style={styles.orderbtnText}>Order Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'outfitBold',
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'outfit'
  },

  orderbtn:{
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    position: 'absolute',
    bottom: 30,
  },

  orderbtnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'outfitBold'
  }

});
