import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MovieItem = (movie) => {
    let base_movie = movie.movie.item
    // console.log(`Movie : ${JSON.stringify(base_movie)}`)
    // console.log("Movie contents ", base_movie.title)

    return (
        <View>
            <Image style={styles.imageItem} source={{ uri: 'https://image.tmdb.org/t/p/w500'+base_movie.poster_path }} />
        </View>
    )
}

export default MovieItem

const styles = StyleSheet.create({
    imageItem: {
        width: 100,
        height: 160,
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})