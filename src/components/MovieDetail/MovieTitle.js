import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieTitle = ({ title }) => {
    return (
        <View>
            <Text style={styles.movieTitle}>{title}</Text>
        </View>
    )
}

export default MovieTitle

const styles = StyleSheet.create({
    movieTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
})