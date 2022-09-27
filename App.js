import React from 'react';
import { StyleSheet } from 'react-native';
import HomePage from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MovieSearchScreen from './src/screens/MovieSearchScreen';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            title: 'Accueil',
            headerRight: () => (
              <MaterialIcon name='search' size={30} onPress={() => navigation.navigate("MovieSearch")} />
            )
          })}
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={({ navigation }) => ({
            title: 'Accueil',
            headerRight: () => (
              <MaterialIcon name='search' size={30} onPress={() => navigation.navigate("MovieSearch")} />
            )
          })}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
        />
        <Stack.Screen
          name="MovieSearch"
          component={MovieSearchScreen}
          options={{
            title: "Cherche film"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
