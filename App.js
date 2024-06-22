import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { Text } from 'react-native';
import { useCallback } from 'react';

import HomeScreen from './app/screen/HomeScreen';
import DetailsScreen from './app/screen/DetailsScreen';
import ProfileScreen from './app/screen/ProfileScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={'Details'} />
    </Stack.Navigator>
  );
}


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfitMedium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfitBold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  React.useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="home"
            component={HomeStack}
            options={{
              tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12, marginTop: -7 }}>Home</Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12, marginTop: -7 }}>Profile</Text>
              ),
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
