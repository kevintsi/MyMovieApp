import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import MoviesScreen from '../screens/MoviesScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import HomeScreen from "../screens/HomeScreen"
import MovieSearchScreen from "../screens/MovieSearchScreen";


const Stack = createStackNavigator()

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={() => ({
                    title: 'Accueil',
                    headerStyle: styles.header,
                    headerTintColor: "white",
                })}
            />
            <Stack.Screen
                name="MovieDetail"
                component={MovieDetailScreen}
                options={{
                    headerStyle: styles.header,
                    headerTintColor: "white",
                }}
            />
            <Stack.Screen
                name="Movies"
                component={MoviesScreen}
                options={() => ({
                    title: 'Accueil',
                    headerStyle: styles.header,
                    headerTintColor: "white",
                })}
            />
        </Stack.Navigator>
    )

}


const SearchStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MovieSearch"
                component={MovieSearchScreen}
                options={{
                    headerStyle: styles.header,
                    headerTintColor: "white",
                    title: "Recherche d'un film"
                }}
            />
        </Stack.Navigator>
    )
}




export { HomeStackNavigator, SearchStackNavigator }

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#E43A45",
    }
})