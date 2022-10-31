import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeStackNavigator, SearchStackNavigator } from './StackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#E43A45' }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={{
                    headerShown: false,
                    title: "Accueil",
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={26} color={color} />

                }}
            />
            <Tab.Screen
                name="MovieSearchTab"
                component={SearchStackNavigator}
                options={{
                    headerShown: false,
                    title: "Recherche",
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="magnify" size={26} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;