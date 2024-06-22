import React from 'react';
import { Alert } from 'react-native';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Navbar() {

    const handleOrder = () => {
        Alert.alert("Search", "oops this application is under construction");
      };

    return (
        // user section
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image 
                source={require ('../../assets/images/photohead.png')}
                style={styles.userImage}/>
                <View>
                    <Text style={styles.text}>Welcome</Text>
                    <Text style={styles.textUser}>farhanyogaw@gmail.com</Text>
                </View>
            </View>
            {/* searchbar section */}
            <View style={styles.searchContainer}>
                <TextInput placeholder='Search'
                style={styles.textInput}/>
                <TouchableOpacity>
                    <FontAwesome name="search" 
                    style={styles.searchbtn} onPress={handleOrder}
                    size={24} color="dodgerblue" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        paddingTop:40,
        backgroundColor:  'dodgerblue',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },

    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },

    userImage: {
        width:45,
        height:45,
        borderRadius:99,
        borderWidth: 2,
        borderColor: 'black'
    },

    text:{
        color: 'white',
        fontSize : 12,
    },

    textUser:{
        color: 'white',
        fontSize : 18,
        fontFamily:'outfit'
    },

    searchContainer:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },

    searchbtn:{
        backgroundColor: 'white',
        padding:10,
        borderRadius:8
    },

    textInput:{
        padding:7,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        width: '85%',
        fontSize: 16,

    }
    
    
});
