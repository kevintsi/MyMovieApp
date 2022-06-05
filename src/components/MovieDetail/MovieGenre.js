import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

const MovieGenre = ({ genres }) => {
    return (
        <ScrollView horizontal={true}>
            {genres.map(genre => (<Text key={genre.id} style={styles.genreStyle}>{genre.name}</Text>))}
        </ScrollView>
    )
}

export default MovieGenre

const styles = StyleSheet.create({
    genreStyle: {
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 20,
        height: 45
    },
})