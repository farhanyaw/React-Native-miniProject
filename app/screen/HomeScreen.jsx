import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import axios from "axios";
import Navbar from "../nav/Navbar";
import { ScrollView } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data.slice(0, 10)); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.slide}
      onPress={() => navigation.navigate("Details", { photo: item })}
    >
      <Image source={{ uri: item.url }} style={styles.image} />
    </TouchableOpacity>
  );

  const renderSuggestedItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestedItem}
      onPress={() => navigation.navigate("Details", { photo: item })}
    >
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={styles.suggestedImage}
      />
      <Text style={styles.suggestedText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <Navbar/>
      <Text style={styles.heading}>Special Offers</Text>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={styles.sliderContainer}
      />
      <Text style={styles.suggestTitle}>Suggested For You</Text>
      <FlatList
        data={photos}
        renderItem={renderSuggestedItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.suggestedContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfitBold",
    margin: 10,
  },

  slide: {
    width: screenWidth - 150,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    height: 165,
    overflow: "hidden",
    borderRadius: 15,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    flex: 1,
    objectFit: "cover",
  },

  sliderContainer: {
    paddingHorizontal: 20,
  },

  suggestTitle: {
    fontSize: 20,
    fontFamily: "outfitBold",
    margin: 10,
  },

  suggestedContainer: {
    paddingHorizontal: 10,
  },

  columnWrapper: {
    justifyContent: "space-between",
  },

  suggestedItem: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    width: screenWidth / 2 - 15,
    marginBottom: 10,
  },

  suggestedImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },

  suggestedText: {
    padding: 10,
    fontSize: 14,
    fontFamily: "outfit",
  },
});
